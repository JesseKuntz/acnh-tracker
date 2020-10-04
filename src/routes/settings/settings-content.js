import { h, Component, Fragment } from 'preact';

const netlifyIdentity = require('netlify-identity-widget');

import style from './style';

import saveSettingsData from '../../fauna/save-settings-data';

import { areObjectsDifferent } from '../../components/support/diff-objects';
import { getSaveButtonContent } from '../../components/support/get-save-button-content';

export default class SettingsContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      originalSettings: null,
      newSettings: null,
      northern: false,
      subscribed: false,
      enableSave: false,
      isSaving: false,
      showError: false,
    };
  }

  setSettings(settings) {
    const northern = settings.northern;
    const subscribed = settings.subscribed;

    this.setState({ originalSettings: settings, northern, subscribed });
  }

  componentDidMount() {
    this.setSettings(this.props.data.settings);
  }

  logOutButtonHandler() {
    netlifyIdentity.logout();
  }

  hemisphereClick(northern) {
    const newSettings = { subscribed: this.state.subscribed, northern };

    this.setState({
      northern,
      enableSave: areObjectsDifferent(newSettings, this.state.originalSettings),
      newSettings,
    });
  }

  subscriptionClick(subscribed) {
    const newSettings = { subscribed, northern: this.state.northern };

    this.setState({
      subscribed,
      enableSave: areObjectsDifferent(newSettings, this.state.originalSettings),
      newSettings,
    });
  }

  async saveNewCatchData(data, accountRef) {
    this.setState({ isSaving: true });

    const result = await saveSettingsData(data, accountRef);

    if (result.data) {
      return this.setState({
        originalSettings: result.data.settings,
        enableSave: false,
        showError: false,
        isSaving: false,
      });
    }

    return this.setState({ showError: true, isSaving: false });
  }

  render() {
    const {
      northern,
      subscribed,
      enableSave,
      isSaving,
      newSettings,
      showError,
    } = this.state;

    return (
      <Fragment>
        <h2>Hemisphere</h2>
        <div class={style['radio-container']}>
          <input
            type="radio"
            id="northern"
            name="hemisphere"
            value="northern"
            onClick={() => this.hemisphereClick(true)}
            checked={northern}
          />
          <label for="northern">Northern</label>
        </div>
        <div class={style['radio-container']}>
          <input
            type="radio"
            id="southern"
            name="hemisphere"
            value="southern"
            onClick={() => this.hemisphereClick(false)}
            checked={!northern}
          />
          <label for="southern">Southern</label>
        </div>
        <h2>Email Subscription</h2>
        <div class={style['radio-container']}>
          <input
            type="radio"
            id="subscribed"
            name="subscription"
            value="subscribed"
            onClick={() => this.subscriptionClick(true)}
            checked={subscribed}
          />
          <label for="subscribed">Subscribed</label>
        </div>
        <div class={style['radio-container']}>
          <input
            type="radio"
            id="unsubscribed"
            name="subscription"
            value="unsubscribed"
            onClick={() => this.subscriptionClick(false)}
            checked={!subscribed}
          />
          <label for="unsubscribed">Unsubscribed</label>
        </div>
        <button
          class={style.button}
          disabled={!enableSave}
          onClick={() =>
            this.saveNewCatchData(newSettings, this.props.accountRef)
          }
        >
          {getSaveButtonContent(isSaving, enableSave)}
        </button>
        {showError && (
          <div class={style.error}>
            There was an error saving your catches - please check your network
            connection and then try again.
          </div>
        )}
        <button class={style['button']} onClick={this.logOutButtonHandler}>
          Log Out
        </button>
      </Fragment>
    );
  }
}

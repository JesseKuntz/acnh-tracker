import { h, Component } from 'preact';

import SettingsContent from './settings-content';

import style from './style';

function dataExists(data) {
  return !(!data || !Object.keys(data).length);
}

function renderSpinner(isLoading) {
  if (isLoading) {
    return <div class={`${style.loader} ${style.margin}`} />;
  }

  return null;
}

export default class Settings extends Component {
  state = {};

  render() {
    return (
      <div class={style.settings}>
        <div class={style['title-row']}>
          <h1 class={style.title}>Settings</h1>
          {renderSpinner(this.props.isLoading)}
        </div>

        {dataExists(this.props.data) ? (
          <SettingsContent
            data={this.props.data}
            accountRef={this.props.accountRef}
          />
        ) : (
          !this.props.isLoading && (
            <p>
              You have to log in before you can view and/or change your
              settings... so do that!
            </p>
          )
        )}
      </div>
    );
  }
}

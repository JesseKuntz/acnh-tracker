import { h, Component } from 'preact';

const netlifyIdentity = require('netlify-identity-widget');

import LoginButton from './button';

import style from './style';

const CSS_PADDING_VAR_NAME = '--page-padding-top';
const LOGGED_IN_PADDING = '92px';
const LOGGED_OUT_PADDING = '118px';

export default class LoginInfo extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }

  userLogin(user) {
    if (user) {
      this.setState({ user });
      document.documentElement.style.setProperty(
        CSS_PADDING_VAR_NAME,
        LOGGED_IN_PADDING
      );
    }
  }

  userLogout() {
    this.setState({ user: null });
    document.documentElement.style.setProperty(
      CSS_PADDING_VAR_NAME,
      LOGGED_OUT_PADDING
    );
  }

  componentDidMount() {
    netlifyIdentity.on('login', user => this.userLogin(user));
    netlifyIdentity.on('logout', () => this.userLogout());
  }

  render() {
    if (!this.state.user) {
      return (
        <div class={style['info-container']}>
          <LoginButton />
        </div>
      );
    }

    return (
      <div class={style['info-container']}>
        <div class={style.info}>
          Account: {this.state.user.user_metadata.full_name}
        </div>
        <a class={style.settings} href="/settings">
          Settings
        </a>
      </div>
    );
  }
}

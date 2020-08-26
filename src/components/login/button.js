import { h, Component } from 'preact';

const netlifyIdentity = require('netlify-identity-widget');

import style from './style';

export default class LoginButton extends Component {
  clickHandler() {
    netlifyIdentity.open();
  }

  render() {
    return (
      <div class={style.container}>
        <button class={style.login} onClick={this.clickHandler}>
          Log in
        </button>
      </div>
    );
  }
}

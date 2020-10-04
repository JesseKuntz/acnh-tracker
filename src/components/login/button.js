import { h } from 'preact';

const netlifyIdentity = require('netlify-identity-widget');

import style from './style.css';

function clickHandler() {
  netlifyIdentity.open();
}

function LoginButton() {
  return (
    <div class={style.container}>
      <button class={style.login} onClick={clickHandler}>
        Log In
      </button>
    </div>
  );
}

export default LoginButton;

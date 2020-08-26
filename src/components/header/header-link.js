import { h } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';

function processType(type) {
  return type.replace('-', ' ');
}

function HeaderLink({ type, clickHandler }) {
  return (
    <Link
      activeClassName={style.active}
      href={`/tracker/${type}`}
      onClick={clickHandler}
    >
      <div class={`${style.content} ${style['menu-link-wrapper']}`}>
        <div class={style['menu-text']}>{processType(type)}</div>
        <img class={style.icon} src={`../../assets/menu/${type}.svg`} />
      </div>
    </Link>
  );
}

export default HeaderLink;

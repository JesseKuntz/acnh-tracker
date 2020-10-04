import { h } from 'preact';
import { Link } from 'preact-router/match';

import { processType } from '../support/process-type';

import style from './style.css';

function getHref(type, href) {
  return href ? href : `/tracker/${type}`;
}

function HeaderLink({ type, clickHandler, href }) {
  return (
    <Link
      activeClassName={style.active}
      href={getHref(type, href)}
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

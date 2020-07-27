import { h, Fragment } from 'preact';
import { Link } from 'preact-router/match';

import LoginInfo from '../login/info'

import style from './style.css';

const Header = () => (
	<Fragment>
		<header class={`${style['header-primary']} ${style.header}`}>
			<div class={style.content}>
				<Link activeClassName={style.active} href="/">
					<h1>AC Tracker</h1>
					<img class={style.check} src="../../assets/menu/check.svg" />
				</Link>

				<nav>
					<Link activeClassName={style.active} href="/tracker/fish"><img src="../../assets/menu/fish.svg" /></Link>
					<Link activeClassName={style.active} href="/tracker/bug"><img src="../../assets/menu/bug.svg" /></Link>
					<Link activeClassName={style.active} href="/tracker/sea-creature"><img src="../../assets/menu/scuba.svg" /></Link>
				</nav>
			</div>
		</header>
		<header class={`${style['header-secondary']} ${style.header}`}>
			<div class={style.content}>
				<LoginInfo />
			</div>
		</header>
	</Fragment>
);

export default Header;

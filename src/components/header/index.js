import { h, Fragment } from 'preact';
import { Link } from 'preact-router/match';

import LoginInfo from '../login/info'

import style from './style.css';

const Header = () => (
	<Fragment>
		<header class={style.headerPrimary}>
			<div class={style.content}>
				<Link activeClassName={style.active} href="/"><h1>AC Tracker ✅</h1></Link>

				<nav>
					<Link activeClassName={style.active} href="/tracker/fish">🐡</Link>
					<Link activeClassName={style.active} href="/tracker/bug">🦋</Link>
					<Link activeClassName={style.active} href="/tracker/sea%20creature">🤿</Link>
				</nav>
			</div>
		</header>
		<header class={style.headerSecondary}>
			<div class={style.content}>
				<LoginInfo />
			</div>
		</header>
	</Fragment>
);

export default Header;

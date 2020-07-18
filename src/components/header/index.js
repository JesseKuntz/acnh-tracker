import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<div class={style.content}>
			<Link activeClassName={style.active} href="/"><h1>AC Tracker ✅</h1></Link>

			<nav>
				<Link activeClassName={style.active} href="/tracker/fish">🐡</Link>
				<Link activeClassName={style.active} href="/tracker/bug">🦋</Link>
				<Link activeClassName={style.active} href="/tracker/sea%20creature">🤿</Link>
			</nav>
		</div>
	</header>
);

export default Header;

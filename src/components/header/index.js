import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>🐠</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/tracker/fish">Fish</Link>
			<Link activeClassName={style.active} href="/tracker/bug">Bugs</Link>
			<Link activeClassName={style.active} href="/tracker/sea%20creature">Sea Creatures</Link>
		</nav>
	</header>
);

export default Header;

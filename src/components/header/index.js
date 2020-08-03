import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import LoginInfo from '../login/info'

import style from './style.css';


function getMenuClass(open) {
  return open ? style.show : style.hide;
}

function getHamburgerClass(open) {
	return open ? style.change : null;
}

class Header extends Component {
	constructor() {
		super();

		this.state = {
			isMenuOpen: false,
		};
	}

	clickHandler() {
		this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
	}

	render() {
		return (
			<div class={style['header-container']}>
				<header class={`${style['header-primary']} ${style.header}`}>
					<div class={style.content}>
						<Link activeClassName={style.active} href="/">
							<h1>AC Tracker</h1>
							<img class={style.check} src="../../assets/menu/check.svg" />
						</Link>

						<div class={style['hamburger-buns']}>
							<div class={getHamburgerClass(this.state.isMenuOpen)} onClick={() => this.clickHandler()}>
								<div class={style.bar1} />
								<div class={style.bar2} />
								<div class={style.bar3} />
							</div>
						</div>
					</div>
				</header>
				<header class={`${style['header-menu']} ${style.header}`}>
					<nav class={getMenuClass(this.state.isMenuOpen)}>
						{/* definitely have an opportunity for some DRY here */}
						<Link activeClassName={style.active} href="/tracker/fish" onClick={() => this.clickHandler()}>
							<img class={`${style.icon} ${style.content}`} src="../../assets/menu/fish.svg" />
						</Link>
						<Link activeClassName={style.active} href="/tracker/bug" onClick={() => this.clickHandler()}>
							<img class={`${style.icon} ${style.content}`} src="../../assets/menu/bug.svg" />
						</Link>
						<Link activeClassName={style.active} href="/tracker/sea-creature" onClick={() => this.clickHandler()}>
							<img class={`${style.icon} ${style.content}`} src="../../assets/menu/scuba.svg" />
						</Link>
					</nav>
				</header>
				<header class={`${style['header-secondary']} ${style.header}`}>
					<div class={style.content}>
						<LoginInfo />
					</div>
				</header>
			</div>
		);
	}
}

export default Header;

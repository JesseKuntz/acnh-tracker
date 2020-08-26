import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import LoginInfo from '../login/info';
import HeaderLink from './header-link';

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
            <Link
              activeClassName={style.active}
              href="/"
              onClick={() => this.setState({ isMenuOpen: false })}
            >
              <h1>AC Tracker</h1>
              <img class={style.check} src="../../assets/menu/check.svg" />
            </Link>

            <div class={style['hamburger-buns']}>
              <div
                class={getHamburgerClass(this.state.isMenuOpen)}
                onClick={() => this.clickHandler()}
              >
                <div class={style.bar1} />
                <div class={style.bar2} />
                <div class={style.bar3} />
              </div>
            </div>
          </div>
        </header>
        <header class={`${style['header-menu']} ${style.header}`}>
          <nav class={getMenuClass(this.state.isMenuOpen)}>
            <HeaderLink
              type={'fish'}
              clickHandler={() => this.clickHandler()}
            />
            <HeaderLink type={'bug'} clickHandler={() => this.clickHandler()} />
            <HeaderLink
              type={'sea-creature'}
              clickHandler={() => this.clickHandler()}
            />
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

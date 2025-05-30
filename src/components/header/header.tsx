import { useState } from "preact/hooks";
import checkSvg from "../../assets/menu/check.svg";
import { LoginInfo } from "../login/info";
import { HeaderLink } from "./header-link";
import "./style.css";

function getMenuClass(open) {
  return open ? "show" : "hide";
}

function getHamburgerClass(open) {
  return open ? "change" : null;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const clickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div class="header-container">
      <header class="header-primary header">
        <div class="content">
          <a href="/" onClick={() => setIsMenuOpen(false)}>
            <h1>AC Tracker</h1>
            <img
              class="check"
              src={checkSvg}
              alt="check icon"
              width={56}
              height={56}
            />
          </a>

          <div class="hamburger-buns">
            <div
              class={getHamburgerClass(isMenuOpen)}
              onClick={clickHandler}
              onKeyUp={(event) => event.code === "Enter" && clickHandler()}
              tabIndex={0}
            >
              <div class="bar1" />
              <div class="bar2" />
              <div class="bar3" />
            </div>
          </div>
        </div>
      </header>
      <header class="header-menu header">
        <nav class={getMenuClass(isMenuOpen)}>
          <HeaderLink type={"fish"} clickHandler={clickHandler} />
          <HeaderLink type={"bug"} clickHandler={clickHandler} />
          <HeaderLink type={"sea-creature"} clickHandler={clickHandler} />
          <HeaderLink
            href={"/monthly"}
            type={"monthly-catches"}
            clickHandler={clickHandler}
          />
        </nav>
      </header>
      <header class="header-secondary header">
        <div class="content">
          <LoginInfo />
        </div>
      </header>
    </div>
  );
}

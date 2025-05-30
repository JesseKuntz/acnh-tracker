import heroImageWebp from "../../assets/icons/hero-image.webp";
import heroImagePng from "../../assets/icons/hero-image.png";
import fishIcon from "../../assets/menu/fish.svg";
import bugIcon from "../../assets/menu/bug.svg";
import seaCreatureIcon from "../../assets/menu/sea-creature.svg";
import "./style.css";

export function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Animal Crossing Specimen Tracker!</h1>
      <picture>
        <source srcset={heroImageWebp} type="image/webp" />
        <source srcset={heroImagePng} type="image/png" />
        <img
          className="hero-image"
          src={heroImagePng}
          alt="bug net and fishing rod logo"
          height={200}
          width={200}
        />
      </picture>
      <p>
        Make an account and start tracking what you have caught so far by
        clicking on the buttons below (or in the navigation)! Once you do that,
        you will receive a monthly "Catches of the Month" email containing all
        of the specimen that you still need to catch for that specific month, as
        well as times and places that you can catch each specimen.
      </p>
      <div className="specimen-button-container">
        <a className="specimen-button" href="/tracker/fish">
          Fish
          <img
            className="icon"
            src={fishIcon}
            alt="fish"
            width={46}
            height={46}
          />
        </a>
        <a className="specimen-button" href="/tracker/bug">
          Bugs
          <img
            className="icon"
            src={bugIcon}
            alt="bug"
            width={46}
            height={46}
          />
        </a>
        <a className="specimen-button" href="/tracker/sea-creature">
          Sea Creatures
          <img
            className="icon"
            src={seaCreatureIcon}
            alt="sea creature"
            width={46}
            height={46}
          />
        </a>
      </div>
      <div className="footer">
        Made with 💙 by&nbsp;
        <a
          href="https://jessekuntz.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          Jesse Kuntz
        </a>
      </div>
    </div>
  );
}

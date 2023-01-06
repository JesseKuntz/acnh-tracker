import { h } from 'preact';

import style from './style.css';

function Home() {
  return (
    <div class={style.home}>
      <h1>Welcome to the Animal Crossing Specimen Tracker!</h1>
      <picture>
        <source srcset="../../assets/icons/hero-image.webp" type="image/webp" />
        <source srcset="../../assets/icons/hero-image.png" type="image/png" />
        <img
          class={style['hero-image']}
          src="../../assets/icons/hero-image.png"
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
      <div class={style['specimen-button-container']}>
        <a class={style['specimen-button']} href="/tracker/fish">
          Fish
          <img
            class={style.icon}
            src={`../../assets/menu/fish.svg`}
            alt="fish"
            width={46}
            height={46}
          />
        </a>
        <a class={style['specimen-button']} href="/tracker/bug">
          Bugs
          <img
            class={style.icon}
            src={`../../assets/menu/bug.svg`}
            alt="bug"
            width={46}
            height={46}
          />
        </a>
        <a class={style['specimen-button']} href="/tracker/sea-creature">
          Sea Creatures
          <img
            class={style.icon}
            src={`../../assets/menu/sea-creature.svg`}
            alt="sea creature"
            width={46}
            height={46}
          />
        </a>
      </div>
      <div class={style.footer}>
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

export default Home;

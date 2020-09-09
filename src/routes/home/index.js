import { h } from 'preact';

import style from './style';

const Home = () => (
  <div class={style.home}>
    <h1>Welcome to the Animal Crossing Specimen Tracker!</h1>
    <picture>
      <source srcset="../../assets/icons/hero-image.webp" type="image/webp" />
      <source srcset="../../assets/icons/hero-image.png" type="image/png" />
      <img
        class={style['hero-image']}
        src="../../assets/icons/hero-image.png"
      />
    </picture>
    <p>
      Each tab in the navigation will keep track of a different type of
      specimen. Once the functionality is built out, you will be able set alerts
      for specific creatures to remind you when you are able to catch them!
    </p>
    <p>
      For now, you can log in, and soon you will be able to start keeping track
      of what you have caught so far.
    </p>
  </div>
);

export default Home;

import { h } from 'preact';

import style from './style.css';

function VerboseSpecimen({ type, image, name, location, time }) {
  return (
    <div class={style['specimen-base']}>
      <picture>
        <source
          srcset={`../../assets/${type}/webp/${image}.webp`}
          type="image/webp"
        />
        <source
          srcset={`../../assets/${type}/png/${image}.png`}
          type="image/png"
        />
        <img class={style.logo} src={`../../assets/${type}/png/${image}.png`} />
      </picture>
      <div class={style['verbose-title']}>{name}</div>
      <div class={style['info-container']}>
        {location && (
          <div class={style['info-text']}>
            <span class={style.bold}>Location:</span> {location}
          </div>
        )}
        <div>
          <span class={style.bold}>Time:</span> {time}
        </div>
      </div>
    </div>
  );
}

export default VerboseSpecimen;

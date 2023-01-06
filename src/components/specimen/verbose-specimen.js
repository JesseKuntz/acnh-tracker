import { h } from 'preact';
import { useState } from 'preact/hooks';

import style from './style.css';

function clickHandler({ setSelected, selected, addCatch, removeCatch }) {
  if (selected) {
    removeCatch();
  } else {
    addCatch();
  }

  setSelected(!selected);
}

function VerboseSpecimen({
  type,
  image,
  name,
  location,
  time,
  addCatch,
  removeCatch,
}) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      class={`${style['specimen-base']} ${selected ? style.selected : ''}`}
      onClick={() =>
        clickHandler({ setSelected, selected, addCatch, removeCatch })
      }
    >
      <picture>
        <source
          srcset={`../../assets/${type}/webp/${image}.webp`}
          type="image/webp"
        />
        <source
          srcset={`../../assets/${type}/png/${image}.png`}
          type="image/png"
        />
        <img
          class={style.logo}
          src={`../../assets/${type}/png/${image}.png`}
          alt={name}
          width={64}
          height={64}
        />
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

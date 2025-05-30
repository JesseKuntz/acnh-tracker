import { useState } from "preact/hooks";

import style from "./style.module.css";

function getSpecimenClass(selected) {
  const baseClass = `${style["specimen-base"]} ${style["specimen-tracker"]}`;

  if (selected) {
    return `${baseClass} ${style.selected}`;
  }

  return baseClass;
}

export function Specimen({ image, type, name, caught, onClick }) {
  const [selected, setSelected] = useState(caught);

  const clickHandler = () => {
    onClick(name);
    setSelected(!selected);
  };

  return (
    <div
      class={getSpecimenClass(selected)}
      onClick={clickHandler}
      onKeyUp={(event) => event.code === "Enter" && clickHandler()}
      tabIndex={0}
    >
      <picture>
        <source srcset={`/${type}/webp/${image}.webp`} type="image/webp" />
        <source srcset={`/${type}/png/${image}.png`} type="image/png" />
        <img
          class={style.logo}
          src={`/${type}/png/${image}.png`}
          alt={name}
          width={64}
          height={64}
        />
      </picture>
      <div class={style.textContainer}>
        <p class={style.text}>{name}</p>
      </div>
    </div>
  );
}

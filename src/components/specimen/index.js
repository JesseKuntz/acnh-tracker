import style from './style';

export default function Specimen({name, image, type}) {
  return (
    <div class={style.specimen}>
      <picture>
        <source srcset={`../../assets/${type}/webp/${image}.webp`} type="image/webp" />
        <source srcset={`../../assets/${type}/png/${image}.png`} type="image/png" />
        <img class={style.logo} src={`../../assets/${type}/png/${image}.png`} />
      </picture>
      <div class={style.textContainer}>
        <p class={style.text}>{name}</p>
      </div>
    </div>
  );
}

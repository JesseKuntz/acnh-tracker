import style from './style';

export default function Specimen({url, name}) {
  return (
    <div class={style.specimen}>
      <img class={style.logo} src={url} />
      <div class={style.textContainer}>
        <p class={style.text}>{name}</p>
      </div>
    </div>
  );
}

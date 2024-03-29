import { h, Component } from 'preact';

import style from './style.css';

function getSpecimenClass(selected) {
  const baseClass = `${style['specimen-base']} ${style['specimen-tracker']}`;

  if (selected) {
    return `${baseClass} ${style.selected}`;
  }

  return baseClass;
}

export default class Specimen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.caught,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.clickHandler(this.props.name);
    this.setState(prevState => ({ selected: !prevState.selected }));
  }

  render() {
    const { type, image, name } = this.props;

    return (
      <div
        class={getSpecimenClass(this.state.selected)}
        onClick={this.clickHandler}
        onKeyUp={event => event.code === 'Enter' && this.clickHandler()}
        tabIndex="0"
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
        <div class={style.textContainer}>
          <p class={style.text}>{name}</p>
        </div>
      </div>
    );
  }
}

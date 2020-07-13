import Specimen from './index';
import Specimens from '../../assets/index';

import style from './style';

export default function SpecimenContainer({type}) {
  return (
    <div class={style.container}>
      {Specimens[type].map(specimen => <Specimen url={`../../assets/${type}/png/${specimen.img}.png`} name={specimen.name} key={specimen.name} />)}
    </div>
  );
}

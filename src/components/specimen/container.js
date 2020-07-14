import {Fragment} from 'preact';

import Specimen from './index';
import Specimens from '../../assets/index';

import style from './style';

function filter() {
  let input, filter, container, item, p, i, txtValue;
  input = document.getElementById('specimenFilter');
  filter = input.value.toUpperCase();
  container = document.querySelector('.specimen-container');
  item = container.getElementsByTagName('div');

  for (i = 0; i < item.length; i++) {
    p = item[i].getElementsByTagName('p')[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

export default function SpecimenContainer({type}) {
  const placeholder = `Search for a ${type}!`;

  return (
    <Fragment>
      <input type="text" id="specimenFilter" placeholder={placeholder} onKeyUp={filter} />
      <div class={`${style.container} specimen-container`}>
        {Specimens[type].map(specimen => <Specimen url={`../../assets/${type}/png/${specimen.img}.png`} name={specimen.name} key={specimen.name} />)}
      </div>
    </Fragment>
  );
}

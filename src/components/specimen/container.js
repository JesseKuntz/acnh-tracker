import { Fragment } from 'preact';

import Specimen from './index';
import Specimens from '../../assets/index';

import style from './style';

function filter() {
  let input, filter, container, item, p, i, txtValue;
  input = document.getElementById('specimen-filter');
  filter = input.value.toUpperCase();
  container = document.querySelector('.specimen-container');
  item = container.getElementsByTagName('div');

  for (i = 0; i < item.length; i++) {
    p = item[i].getElementsByTagName('p')[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = '';
    } else {
      item[i].style.display = 'none';
    }
  }
}

function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

function checkIfCaught({ specimen, data, type }) {
  const slug = slugify(specimen.name);

  if (data[type]) {
    return data[type][slug];
  }
}

function renderSpecimens(type, data) {
  return Specimens[type].map(specimen => {
    const isCaught = checkIfCaught({ specimen, data, type });
    return <Specimen image={specimen.img} type={type} name={specimen.name} key={isCaught} caught={isCaught} />
  });
}

export default function SpecimenContainer({ type, processedType, data }) {
  const placeholder = `Search for a ${processedType}!`;

  return (
    <Fragment>
      <input type="text" id="specimen-filter" placeholder={placeholder} onKeyUp={filter} />
      <div class={`${style.container} specimen-container`}>
        {renderSpecimens(type, data)}
      </div>
    </Fragment>
  );
}

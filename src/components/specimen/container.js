import { h, Fragment, Component } from 'preact';

import Specimen from './index';
import Specimens from '../../assets/index';

import style from './style';
import globalStyle from '../../routes/tracker/style.css';

import saveCatchData from '../../fauna/save-catch-data';

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

function hasBeenCaught({ name, data }) {
  const slug = slugify(name);

  if (data) {
    return data[slug];
  }
}

function renderSpecimens(type, data, clickHandler) {
  return Specimens[type].map(specimen => {
    const isCaught = hasBeenCaught({ name: specimen.name, data: data[type] });
    return <Specimen image={specimen.img} type={type} name={specimen.name} key={`${specimen.name}:${isCaught}`} caught={isCaught} clickHandler={clickHandler} />
  });
}

function areObjectsDifferent(newObj, oldObj) {
  const keys = Object.keys(newObj);

  for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
    const newVal = newObj[keys[keyIndex]];
    const oldVal = oldObj[keys[keyIndex]];

    if ((newVal && !oldVal) || (!newVal && oldVal)) {
      return true;
    }
  }

  return false;
}

function getSaveButtonClass(enableSave) {
  const baseClass = style.button;

  if (!enableSave) {
    return `${baseClass} ${style.disabled}`;
  }

  return baseClass;
}

function getSaveButtonContent(isSaving, enableSave) {
  if (!enableSave) {
    return 'Saved';
  }

  return isSaving ? <div class={globalStyle.loader} /> : 'Save';
}

export default class SpecimenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableSave: false,
      showError: false,
      isSaving: false,
      originalCatchData: {},
      catchData: {},
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const { data, type } = this.props;

    if (data) {
      this.setState({ catchData: data[type], originalCatchData: data[type] }); // eslint-disable-line
    } else {
      console.log('no data on componentDidMount');
    }
  }

  clickHandler(name) {
    const catchData = Object.assign({}, this.state.catchData);
    const isCaught = hasBeenCaught({ name, data: catchData });
    const slugifiedName = slugify(name);

    catchData[slugifiedName] = !isCaught;

    this.setState({ catchData, enableSave: areObjectsDifferent(catchData, this.state.originalCatchData) });
  }

  async saveNewCatchData(data, accountRef, type) {
    this.setState({ isSaving: true });

    const result = await saveCatchData(data, accountRef, type);

    if (result.data) {
      return this.setState({ originalCatchData: result.data[type], enableSave: false, showError: false, isSaving: false });
    }

    return this.setState({ showError: true, isSaving: false });
  }

  render() {
    const { type, processedType, data, accountRef } = this.props;
    const { enableSave, catchData, showError, isSaving } = this.state;

    const placeholder = `Search for a ${processedType}!`;

    return (
      <Fragment>
        <button disabled={!enableSave} class={getSaveButtonClass(enableSave, isSaving)} onClick={() => this.saveNewCatchData(catchData, accountRef, type)}>{getSaveButtonContent(isSaving, enableSave)}</button>
        {showError && <div class={style.error}>There was an error saving your catches - please check your network connection and then try again.</div>}
        <input type="text" id="specimen-filter" placeholder={placeholder} onKeyUp={filter} />
        <div class={`${style.container} specimen-container`}>
          {renderSpecimens(type, data, this.clickHandler)}
        </div>
      </Fragment>
    );
  }
}

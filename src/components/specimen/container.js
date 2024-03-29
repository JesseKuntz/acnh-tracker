import { h, Fragment, Component } from 'preact';

import Specimen from './index';
import Specimens from '../../assets/index';
import SaveButton from '../save-button';

import style from './style.css';

import saveCatchData from '../../fauna/save-catch-data';
import { areObjectsDifferent } from '../support/diff-objects';
import { slugify } from '../support/slugify';

function filterSpecimen() {
  const input = document.getElementById('specimen-filter');
  const filter = input.value.toUpperCase();
  const container = document.querySelector('.tracker-specimen-container');
  const item = container.getElementsByTagName('div');

  for (let i = 0; i < item.length; i++) {
    const p = item[i].getElementsByTagName('p')[0];
    const txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = '';
    } else {
      item[i].style.display = 'none';
    }
  }
}

function hasBeenCaught({ name, data }) {
  const slug = slugify(name);

  if (data) {
    return data[slug];
  }

  return false;
}

function renderSpecimens(type, data, clickHandler) {
  return Specimens[type].map(specimen => {
    const isCaught = hasBeenCaught({ name: specimen.name, data: data[type] });
    return (
      <Specimen
        image={specimen.img}
        type={type}
        name={specimen.name}
        key={`${specimen.name}:${isCaught}`}
        caught={isCaught}
        clickHandler={clickHandler}
      />
    );
  });
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
      type: '',
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    const { data, type } = this.props;
    // eslint-disable-next-line
    this.setState({
      catchData: data[type],
      originalCatchData: data[type],
      type,
    });
  }

  updateCatchData() {
    const { data, type } = this.props;

    if (data) {
      this.setState({
        catchData: data[type],
        originalCatchData: data[type],
        type,
      });
    }
  }

  clickHandler(name) {
    const catchData = Object.assign({}, this.state.catchData);
    const isCaught = hasBeenCaught({ name, data: catchData });
    const slugifiedName = slugify(name);

    catchData[slugifiedName] = !isCaught;

    this.setState({
      catchData,
      enableSave: areObjectsDifferent(catchData, this.state.originalCatchData),
    });
  }

  async saveNewCatchData(data, accountRef, type) {
    this.setState({ isSaving: true });

    const result = await saveCatchData(data, accountRef, type);

    if (result.data) {
      return window.location.reload();
    }

    return this.setState({ showError: true, isSaving: false });
  }

  render() {
    if (this.state.type !== this.props.type) {
      this.updateCatchData();
    }

    const { type, processedType, data, accountRef } = this.props;
    const { enableSave, catchData, showError, isSaving } = this.state;

    const placeholder = `Search for a ${processedType}!`;

    return (
      <Fragment>
        <SaveButton
          {...{
            enableSave,
            isSaving,
            showError,
            clickHandler: () =>
              this.saveNewCatchData(catchData, accountRef, type),
          }}
        />
        <input
          type="text"
          id="specimen-filter"
          class={style['specimen-filter']}
          placeholder={placeholder}
          onKeyUp={filterSpecimen}
        />
        <div class={`${style.container} tracker-specimen-container`}>
          {renderSpecimens(type, data, this.clickHandler)}
        </div>
      </Fragment>
    );
  }
}

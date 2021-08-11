import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import VerboseSpecimen from '../../components/specimen/verbose-specimen';
import SaveButton from '../../components/save-button';

import specimenData from '../../assets/index';

import { slugify } from '../../components/support/slugify';
import { renderSpinner } from '../../components/support/render-spinner';
import { dataExists } from '../../components/support/data-exists';
import saveCatchData from '../../fauna/save-catch-data';

import style from './style.css';

const monthMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const monthEmojiMap = {
  January: '❄️',
  February: '❤️',
  March: '☘️',
  April: '☂️',
  May: '🌸',
  June: '☀️',
  July: '🍦',
  August: '😎',
  September: '🍎',
  October: '🎃',
  November: '🍁',
  December: '⛄️',
};

function shouldAddSpecimen(month, specimen, type, hemisphere, data) {
  const months = specimen.catchData.months[hemisphere];
  const slugifiedName = slugify(specimen.name);

  return (
    (months.includes(month) || months.includes('Every Month')) &&
    !data[type][slugifiedName]
  );
}

function getMonthData(data, month) {
  const hemisphere = data.settings.northern ? 'northern' : 'southern';

  const monthData = { fish: [], bug: [], 'sea-creature': [] };

  specimenData.fish.forEach(fish => {
    if (shouldAddSpecimen(month, fish, 'fish', hemisphere, data)) {
      monthData.fish.push(fish);
    }
  });
  specimenData.bug.forEach(bug => {
    if (shouldAddSpecimen(month, bug, 'bug', hemisphere, data)) {
      monthData.bug.push(bug);
    }
  });
  specimenData['sea-creature'].forEach(seaCreature => {
    if (
      shouldAddSpecimen(month, seaCreature, 'sea-creature', hemisphere, data)
    ) {
      monthData['sea-creature'].push(seaCreature);
    }
  });

  return monthData;
}

function addCatch({ specimen, type, catchData, setCatchData, setEnableSave }) {
  const copyOfCatchData = Object.assign({}, catchData);

  if (!copyOfCatchData[type]) {
    copyOfCatchData[type] = {};
  }
  const slug = slugify(specimen.name);

  copyOfCatchData[type][slug] = true;

  setCatchData(copyOfCatchData);

  setEnableSave(true);
}

function removeCatch({
  specimen,
  type,
  catchData,
  setCatchData,
  setEnableSave,
}) {
  const copyOfCatchData = Object.assign({}, catchData);

  const slug = slugify(specimen.name);

  delete copyOfCatchData[type][slug];

  setCatchData(copyOfCatchData);

  let catchCount = 0;

  Object.keys(copyOfCatchData).forEach(type => {
    catchCount += Object.keys(copyOfCatchData[type]).length;
  });

  if (!catchCount) {
    setEnableSave(false);
  }
}

function saveCatches({ catchData, data, accountRef }) {
  console.log(catchData);
  console.log(data);

  const types = [];

  // Add catchData to data AND the type to types if there is data
  Object.keys(catchData).forEach(type => {});

  types.forEach(type => {
    // saveCatchData(data[type], accountRef, type)
  });
}

function renderSpecimens(
  { monthData, catchData, setCatchData, setEnableSave },
  type
) {
  let location;
  if (type === 'sea-creature') {
    location = 'Ocean';
  }

  const catchHandlerProps = {
    type,
    catchData,
    setCatchData,
    setEnableSave,
  };

  return (
    <div class={style['specimen-container']}>
      {monthData[type].map(specimen => (
        <VerboseSpecimen
          image={specimen.img}
          type={type}
          name={specimen.name}
          location={specimen.catchData.location || location}
          time={specimen.catchData.time}
          addCatch={() => addCatch({ specimen, ...catchHandlerProps })}
          removeCatch={() =>
            removeCatch({
              specimen,
              ...catchHandlerProps,
            })
          }
        />
      ))}
    </div>
  );
}

function getMonthSelect(currentMonth, setMonth) {
  const options = Object.values(monthMap).map(month => (
    <option selected={month === currentMonth}>
      {month} {monthEmojiMap[month]}
    </option>
  ));

  return (
    <select
      class={style['month-selector']}
      onChange={event => setMonth(event.target.selectedIndex)}
    >
      {options}
    </select>
  );
}

function Monthly({ data, accountRef, isLoading }) {
  const date = new Date();

  const [month, setMonth] = useState(date.getMonth());
  const [catchData, setCatchData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [enableSave, setEnableSave] = useState(false);
  const [showError, setShowError] = useState(false);

  const formattedMonth = monthMap[month];

  let monthData = [];

  if (dataExists(data)) {
    monthData = getMonthData(data, formattedMonth);
  }

  const renderSpecimensArgs = {
    monthData,
    catchData,
    setCatchData,
    setEnableSave,
  };

  return (
    <div class={style.monthly}>
      <div class={style['title-row']}>
        <h1 class={style.title}>Monthly Catches</h1>
        {renderSpinner(isLoading)}
      </div>

      {dataExists(data) ? (
        <Fragment>
          <div class={style.month}>
            <h2>Here's what you need to catch in:</h2>
            {getMonthSelect(formattedMonth, setMonth)}
          </div>
          <SaveButton
            {...{
              enableSave,
              isSaving,
              showError,
              className: style.button,
              clickHandler: () =>
                saveCatches({
                  catchData,
                  data,
                  accountRef,
                  setIsSaving,
                  setShowError,
                }),
            }}
          />
          <h3>Fish:</h3>
          {renderSpecimens(renderSpecimensArgs, 'fish')}
          <h3>Bugs:</h3>
          {renderSpecimens(renderSpecimensArgs, 'bug')}
          <h3>Sea Creatures:</h3>
          {renderSpecimens(renderSpecimensArgs, 'sea-creature')}
        </Fragment>
      ) : (
        !isLoading && (
          <p>
            You have to log in before you can view your monthly catches... so do
            that!
          </p>
        )
      )}
    </div>
  );
}

export default Monthly;

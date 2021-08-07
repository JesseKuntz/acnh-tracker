import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';

import VerboseSpecimen from '../../components/specimen/verbose-specimen';

import specimenData from '../../assets/index';

import { slugify } from '../../components/support/slugify';
import { renderSpinner } from '../../components/support/render-spinner';
import { dataExists } from '../../components/support/data-exists';

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
  if (!dataExists(data)) {
    return [];
  }

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

function renderSpecimens(monthData, type) {
  let location;
  if (type === 'sea-creature') {
    location = 'Ocean';
  }

  return (
    <div class={style['specimen-container']}>
      {monthData[type].map(specimen => (
        <VerboseSpecimen
          image={specimen.img}
          type={type}
          name={specimen.name}
          location={specimen.catchData.location || location}
          time={specimen.catchData.time}
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

function Monthly({ data, isLoading }) {
  const date = new Date();
  const [month, setMonth] = useState(date.getMonth());

  const formattedMonth = monthMap[month];

  const monthData = getMonthData(data, formattedMonth);

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

          <h3>Fish:</h3>
          {renderSpecimens(monthData, 'fish')}
          <h3>Bugs:</h3>
          {renderSpecimens(monthData, 'bug')}
          <h3>Sea Creatures:</h3>
          {renderSpecimens(monthData, 'sea-creature')}
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

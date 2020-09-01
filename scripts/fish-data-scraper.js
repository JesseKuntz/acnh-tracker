// STEP 1

// COPY / PASTE INTO CONSOLE @ https://animalcrossing.fandom.com/wiki/Fish_(New_Horizons)#Northern%20Hemisphere

function slugify(string) {
  const a =
    'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
  const b =
    'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
  const p = new RegExp(a.split('').join('|'), 'g');

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '') // Replace spaces with empty
    .replace(/-/g, '') // Replace spaces with empty
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

const tables = document.querySelectorAll('table');

const northernTable = tables[2];
const northernBody = northernTable.querySelector('tbody');
const northernRows = northernBody.querySelectorAll('tr');

const data = [];
for (let i = 0; i < northernRows.length; i++) {
  const columns = northernRows[i].querySelectorAll('td');

  let northern = [];
  if (columns[6].innerText === '✓') northern.push('January');
  if (columns[7].innerText === '✓') northern.push('February');
  if (columns[8].innerText === '✓') northern.push('March');
  if (columns[9].innerText === '✓') northern.push('April');
  if (columns[10].innerText === '✓') northern.push('May');
  if (columns[11].innerText === '✓') northern.push('June');
  if (columns[12].innerText === '✓') northern.push('July');
  if (columns[13].innerText === '✓') northern.push('August');
  if (columns[14].innerText === '✓') northern.push('September');
  if (columns[15].innerText === '✓') northern.push('October');
  if (columns[16].innerText === '✓') northern.push('November');
  if (columns[17].innerText === '✓') northern.push('December');

  if (northern.length === 12) northern = ['Every Month'];

  data.push({
    name: columns[0].innerText,
    img: slugify(columns[0].innerText),
    catchData: {
      price: columns[2].innerText,
      location: columns[3].innerText,
      time: columns[5].innerText,
      months: { northern },
    },
  });
}

// STEP 2

// SWAP TO THE "SOUTHERN" TAB AND COPY / PASTE INTO CONSOLE

const southernTable = tables[4];
const southernBody = southernTable.querySelector('tbody');
const southernRows = southernBody.querySelectorAll('tr');

for (let i = 0; i < northernRows.length; i++) {
  const southernColumns = southernRows[i].querySelectorAll('td');

  let southern = [];
  if (southernColumns[6].innerText === '✓') southern.push('January');
  if (southernColumns[7].innerText === '✓') southern.push('February');
  if (southernColumns[8].innerText === '✓') southern.push('March');
  if (southernColumns[9].innerText === '✓') southern.push('April');
  if (southernColumns[10].innerText === '✓') southern.push('May');
  if (southernColumns[11].innerText === '✓') southern.push('June');
  if (southernColumns[12].innerText === '✓') southern.push('July');
  if (southernColumns[13].innerText === '✓') southern.push('August');
  if (southernColumns[14].innerText === '✓') southern.push('September');
  if (southernColumns[15].innerText === '✓') southern.push('October');
  if (southernColumns[16].innerText === '✓') southern.push('November');
  if (southernColumns[17].innerText === '✓') southern.push('December');

  if (southern.length === 12) southern = ['Every Month'];

  data[i].catchData.months.southern = southern;
}

console.log(JSON.stringify(data)); // eslint-disable-line

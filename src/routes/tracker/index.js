import { h, Fragment } from 'preact';

import SpecimenContainer from '../../components/specimen/container';

import style from './style';

function processType(type) {
  return type.replace('-', ' ');
}

function renderSpinner(isLoading) {
  if (isLoading) {
    return <div class={`${style.loader} ${style.margin}`} />;
  }

  return null;
}

function dataExists(data) {
  return !(!data || !Object.keys(data).length);
}

function Tracker({ type, data, accountRef, isLoading }) {
  const processedType = processType(type);

  return (
    <div class={style.tracker}>
      <div class={style['title-row']}>
        <h1 class={style.title}>{processedType}</h1>
        {renderSpinner(isLoading)}
      </div>

      {dataExists(data) ? (
        <Fragment>
          <p>
            Click each {processedType} to mark that you have caught it! Once you
            edit your catches, the save button will be enabled.
          </p>
          <SpecimenContainer
            type={type}
            processedType={processedType}
            data={data}
            accountRef={accountRef}
          />
        </Fragment>
      ) : (
        !isLoading && (
          <p>
            Click the log in button above to create an account and start
            tracking your catches!
          </p>
        )
      )}
    </div>
  );
}

export default Tracker;

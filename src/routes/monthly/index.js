import {h} from 'preact';

import style from './style';

function dataExists(data) {
  return !(!data || !Object.keys(data).length);
}

function renderSpinner(isLoading) {
  if (isLoading) {
    return <div class={`${style.loader} ${style.margin}`} />;
  }

  return null;
}

function Monthly(props) {
  return (
      <div class={style.monthly}>
        <div class={style['title-row']}>
          <h1 class={style.title}>Monthly Catches</h1>
          {renderSpinner(props.isLoading)}
        </div>

        {dataExists(props.data) ? (
          <div>
           Hello there!
          </div>
        ) : (
          !props.isLoading && (
            <p>
              You have to log in before you can view your monthly catches... so do that!
            </p>
          )
        )}
      </div>
  );
}

export default Monthly;

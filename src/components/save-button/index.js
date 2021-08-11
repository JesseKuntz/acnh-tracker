import { h, Fragment } from 'preact';

import { getSaveButtonContent } from '../support/get-save-button-content';

import style from './style.css';

function SaveButton({
  enableSave,
  isSaving,
  showError,
  clickHandler,
  className = '',
}) {
  return (
    <Fragment>
      <button
        disabled={!enableSave}
        class={`${style.button} ${className}`}
        onClick={clickHandler}
      >
        {getSaveButtonContent(isSaving, enableSave)}
      </button>
      {showError && (
        <div class={style.error}>
          There was an error saving - please check your network connection and
          then try again.
        </div>
      )}
    </Fragment>
  );
}

export default SaveButton;

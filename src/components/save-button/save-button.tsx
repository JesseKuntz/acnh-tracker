import { Fragment } from "preact";
import { getSaveButtonContent } from "../../support/get-save-button-content";
import "./style.css";

export function SaveButton({
  enableSave,
  isSaving,
  showError,
  clickHandler,
  className = "",
}) {
  return (
    <Fragment>
      <button
        disabled={!enableSave}
        class={`save-button ${className}`}
        onClick={clickHandler}
      >
        {getSaveButtonContent(isSaving, enableSave)}
      </button>
      {showError && (
        <div class="error">
          There was an error saving - please check your network connection and
          then try again.
        </div>
      )}
    </Fragment>
  );
}

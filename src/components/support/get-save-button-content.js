import style from './style.css';

function getSaveButtonContent(isSaving, enableSave) {
  if (!enableSave) {
    return 'Saved';
  }

  return isSaving ? <div class={style.loader} /> : 'Save';
}

export { getSaveButtonContent };

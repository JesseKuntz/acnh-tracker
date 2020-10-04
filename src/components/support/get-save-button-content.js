import style from './style';

function getSaveButtonContent(isSaving, enableSave) {
  if (!enableSave) {
    return 'Saved';
  }

  return isSaving ? <div class={style.loader} /> : 'Save';
}

export { getSaveButtonContent };

import style from './style.css';

function renderSpinner(isLoading) {
  if (isLoading) {
    return <div class={`${style.loader} ${style.margin}`} />;
  }

  return null;
}

export { renderSpinner };

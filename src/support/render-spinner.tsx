import "./style.css";

function renderSpinner(isLoading) {
  if (isLoading) {
    return <div class="loader margin" />;
  }

  return null;
}

export { renderSpinner };

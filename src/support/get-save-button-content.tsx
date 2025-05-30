import "./style.css";

function getSaveButtonContent(isSaving, enableSave) {
  if (!enableSave) {
    return "Saved";
  }

  return isSaving ? <div class="loader" /> : "Save";
}

export { getSaveButtonContent };

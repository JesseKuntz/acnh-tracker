import { Fragment } from "preact";
import { useState } from "preact/hooks";

import { Specimen } from "./index";
import Specimens from "../../assets/index";
import { SaveButton } from "../save-button/save-button";

import style from "./style.module.css";
import { areObjectsDifferent } from "../../support/diff-objects";
import { slugify } from "../../support/slugify";
import { useUserData } from "../../providers/user-data-provider";

function filterSpecimen() {
  const input = document.getElementById("specimen-filter") as HTMLInputElement;
  const filter = input.value.toUpperCase();
  const container = document.querySelector(".tracker-specimen-container");
  const item = container.getElementsByTagName("div");

  for (let i = 0; i < item.length; i++) {
    const p = item[i].getElementsByTagName("p")[0];
    const txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}

function hasBeenCaught({ name, data }) {
  const slug = slugify(name);

  if (data) {
    return data[slug];
  }

  return false;
}

function renderSpecimens(type, data, clickHandler) {
  return Specimens[type].map((specimen) => {
    const isCaught = hasBeenCaught({ name: specimen.name, data: data[type] });
    return (
      <Specimen
        image={specimen.img}
        type={type}
        name={specimen.name}
        key={`${specimen.name}:${isCaught}`}
        caught={isCaught}
        onClick={clickHandler}
      />
    );
  });
}

export function SpecimenContainer({ type, processedType, data }) {
  const [enableSave, setEnableSave] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [originalCatchData, setOriginalCatchData] = useState(data[type]);
  const [catchData, setCatchData] = useState(data[type]);

  const { refetch } = useUserData();

  const clickHandler = (name) => {
    const catchDataCopy = Object.assign({}, catchData);
    const isCaught = hasBeenCaught({ name, data: catchDataCopy });
    const slugifiedName = slugify(name);

    catchDataCopy[slugifiedName] = !isCaught;

    setCatchData(catchDataCopy);
    setEnableSave(areObjectsDifferent(catchDataCopy, originalCatchData));
  };

  const saveNewCatchData = async (newData) => {
    setIsSaving(true);

    const response = await fetch("/.netlify/functions/save-catch-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: newData, email: data.email, type }),
    });
    const result = await response.json();

    if (result.data) {
      refetch(result.data);
      setOriginalCatchData(result.data[type]);
      setEnableSave(false);
      setShowError(false);
      setIsSaving(false);
      return;
    }

    setShowError(true);
    setIsSaving(false);
  };

  const placeholder = `Search for a ${processedType}!`;

  return (
    <Fragment>
      <SaveButton
        {...{
          enableSave,
          isSaving,
          showError,
          clickHandler: () => saveNewCatchData(catchData),
        }}
      />
      <input
        type="text"
        id="specimen-filter"
        class={style["specimen-filter"]}
        placeholder={placeholder}
        onKeyUp={filterSpecimen}
      />
      <div class={`${style.container} tracker-specimen-container`}>
        {renderSpecimens(type, data, clickHandler)}
      </div>
    </Fragment>
  );
}

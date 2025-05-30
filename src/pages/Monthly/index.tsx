import { Fragment } from "preact";
import { useState } from "preact/hooks";

import VerboseSpecimen from "../../components/specimen/verbose-specimen";
import { SaveButton } from "../../components/save-button/save-button";

import specimenData from "../../assets/index";

import { slugify } from "../../support/slugify";
import { renderSpinner } from "../../support/render-spinner";

import style from "./style.module.css";
import { useUserData } from "../../providers/user-data-provider";

const monthMap = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const monthEmojiMap = {
  January: "❄️",
  February: "❤️",
  March: "☘️",
  April: "☂️",
  May: "🌸",
  June: "☀️",
  July: "🍦",
  August: "😎",
  September: "🍎",
  October: "🎃",
  November: "🍁",
  December: "⛄️",
};

function shouldAddSpecimen(month, specimen, type, hemisphere, data) {
  const months = specimen.catchData.months[hemisphere];
  const slugifiedName = slugify(specimen.name);

  return (
    (months.includes(month) || months.includes("Every Month")) &&
    !data[type][slugifiedName]
  );
}

function getMonthData(data, month) {
  const hemisphere = data.settings.northern ? "northern" : "southern";

  const monthData = { fish: [], bug: [], "sea-creature": [] };

  specimenData.fish.forEach((fish) => {
    if (shouldAddSpecimen(month, fish, "fish", hemisphere, data)) {
      monthData.fish.push(fish);
    }
  });
  specimenData.bug.forEach((bug) => {
    if (shouldAddSpecimen(month, bug, "bug", hemisphere, data)) {
      monthData.bug.push(bug);
    }
  });
  specimenData["sea-creature"].forEach((seaCreature) => {
    if (
      shouldAddSpecimen(month, seaCreature, "sea-creature", hemisphere, data)
    ) {
      monthData["sea-creature"].push(seaCreature);
    }
  });

  return monthData;
}

function addCatch({ specimen, type, catchData, setCatchData, setEnableSave }) {
  const copyOfCatchData = Object.assign({}, catchData);

  if (!copyOfCatchData[type]) {
    copyOfCatchData[type] = {};
  }
  const slug = slugify(specimen.name);

  copyOfCatchData[type][slug] = true;

  setCatchData(copyOfCatchData);

  setEnableSave(true);
}

function removeCatch({
  specimen,
  type,
  catchData,
  setCatchData,
  setEnableSave,
}) {
  const copyOfCatchData = Object.assign({}, catchData);

  const slug = slugify(specimen.name);

  delete copyOfCatchData[type][slug];

  setCatchData(copyOfCatchData);

  let catchCount = 0;

  Object.keys(copyOfCatchData).forEach((type) => {
    catchCount += Object.keys(copyOfCatchData[type]).length;
  });

  if (!catchCount) {
    setEnableSave(false);
  }
}

async function saveCatches({
  catchData,
  fullData,
  email,
  setIsSaving,
  setShowError,
}) {
  const types = [];
  const copyOfFullData = JSON.parse(JSON.stringify(fullData));

  Object.keys(catchData).forEach((type) => {
    const specimens = Object.keys(catchData[type]);

    if (specimens.length) {
      types.push(type);

      specimens.forEach((specimen) => {
        copyOfFullData[type][specimen] = true;
      });
    }
  });

  setIsSaving(true);

  // const results = await Promise.all(
  //   types.map((type) => saveCatchData(copyOfFullData[type], accountRef, type))
  // );

  const results = await Promise.all(
    types.map(async (type) => {
      const response = await fetch("/.netlify/functions/save-catch-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: copyOfFullData[type], email, type }),
      });
      return await response.json();
    })
  );

  if (results[0].data) {
    return window.location.reload();
  }

  setIsSaving(false);
  return setShowError(true);
}

function renderSpecimens(
  { monthData, catchData, setCatchData, setEnableSave },
  type
) {
  let location;
  if (type === "sea-creature") {
    location = "Ocean";
  }

  const catchHandlerProps = {
    type,
    catchData,
    setCatchData,
    setEnableSave,
  };

  return (
    <div class={style["specimen-container"]}>
      {monthData[type].map((specimen) => (
        <VerboseSpecimen
          image={specimen.img}
          type={type}
          name={specimen.name}
          location={specimen.catchData.location || location}
          time={specimen.catchData.time}
          addCatch={() => addCatch({ specimen, ...catchHandlerProps })}
          removeCatch={() =>
            removeCatch({
              specimen,
              ...catchHandlerProps,
            })
          }
          key={specimen.name}
        />
      ))}
    </div>
  );
}

function getMonthSelect(currentMonth, setMonth) {
  const options = Object.values(monthMap).map((month) => (
    <option selected={month === currentMonth} key={month}>
      {month} {monthEmojiMap[month]}
    </option>
  ));

  return (
    <select
      class={style["month-selector"]}
      onChange={(event) =>
        setMonth((event.target as HTMLSelectElement).selectedIndex)
      }
    >
      {options}
    </select>
  );
}

export function Monthly() {
  const { data, loading: isLoading } = useUserData();

  const date = new Date();
  const fullData = data?.userData;

  const [month, setMonth] = useState(date.getMonth());
  const [catchData, setCatchData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [enableSave, setEnableSave] = useState(false);
  const [showError, setShowError] = useState(false);

  const formattedMonth = monthMap[month];

  let monthData = {};

  if (data?.userData) {
    monthData = getMonthData(fullData || data, formattedMonth);
  }

  const renderSpecimensArgs = {
    monthData,
    catchData,
    setCatchData,
    setEnableSave,
  };

  return (
    <div class={style.monthly}>
      <div class={style["title-row"]}>
        <h1 class={style.title}>Monthly Catches</h1>
        {renderSpinner(isLoading)}
      </div>

      {data?.userData ? (
        <Fragment>
          <div class={style.month}>
            <h2>Here's what you need to catch in:</h2>
            {getMonthSelect(formattedMonth, setMonth)}
          </div>
          <SaveButton
            {...{
              enableSave,
              isSaving,
              showError,
              className: style.button,
              clickHandler: () =>
                saveCatches({
                  catchData,
                  fullData,
                  email: data.userData.email,
                  setIsSaving,
                  setShowError,
                }),
            }}
          />
          <h3>Fish:</h3>
          {renderSpecimens(renderSpecimensArgs, "fish")}
          <h3>Bugs:</h3>
          {renderSpecimens(renderSpecimensArgs, "bug")}
          <h3>Sea Creatures:</h3>
          {renderSpecimens(renderSpecimensArgs, "sea-creature")}
        </Fragment>
      ) : (
        !isLoading && (
          <p>
            You have to log in before you can view your monthly catches... so do
            that!
          </p>
        )
      )}
    </div>
  );
}

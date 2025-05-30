import { Fragment } from "preact";
import { useState } from "preact/hooks";

import { SaveButton } from "../../components/save-button/save-button";
import "../../components/save-button/style.css";
import { areObjectsDifferent } from "../../support/diff-objects";
import { useAuth0 } from "../../auth/Auth0Provider";
import "./style.css";
import { useUserData } from "../../providers/user-data-provider";

export function SettingsContent({ data }) {
  const [originalSettings, setOriginalSettings] = useState(data.settings);
  const [newSettings, setNewSettings] = useState(null);
  const [northern, setNorthern] = useState(data.settings.northern);
  const [subscribed, setSubscribed] = useState(data.settings.subscribed);
  const [enableSave, setEnableSave] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showError, setShowError] = useState(false);

  const { logout } = useAuth0();
  const { refetch } = useUserData();

  const logOutButtonHandler = () => {
    logout();
  };

  const hemisphereClick = (northern) => {
    const newSettings = { subscribed, northern };

    setNewSettings(newSettings);
    setNorthern(northern);
    setEnableSave(areObjectsDifferent(newSettings, originalSettings));
  };

  const subscriptionClick = (subscribed) => {
    const newSettings = { subscribed, northern };

    setNewSettings(newSettings);
    setSubscribed(subscribed);
    setEnableSave(areObjectsDifferent(newSettings, originalSettings));
  };

  const saveNewSettingsData = async (newData) => {
    setIsSaving(true);
    try {
      const response = await fetch("/.netlify/functions/save-settings-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: newData, email: data.email }),
      });
      const result = await response.json();

      if (result.data) {
        refetch(result.data);
        setOriginalSettings(result.data.settings);
        setEnableSave(false);
        setShowError(false);
        setIsSaving(false);
        return;
      }

      setShowError(true);
      setIsSaving(false);
    } catch (e) {
      setShowError(true);
      setIsSaving(false);
    }
  };

  return (
    <Fragment>
      <h2>Hemisphere</h2>
      <div class="radio-container">
        <input
          type="radio"
          id="northern"
          name="hemisphere"
          value="northern"
          onClick={() => hemisphereClick(true)}
          checked={northern}
        />
        <label for="northern">Northern</label>
      </div>
      <div class="radio-container">
        <input
          type="radio"
          id="southern"
          name="hemisphere"
          value="southern"
          onClick={() => hemisphereClick(false)}
          checked={!northern}
        />
        <label for="southern">Southern</label>
      </div>
      <h2>Email Subscription</h2>
      <div class="radio-container">
        <input
          type="radio"
          id="subscribed"
          name="subscription"
          value="subscribed"
          onClick={() => subscriptionClick(true)}
          checked={subscribed}
        />
        <label for="subscribed">Subscribed</label>
      </div>
      <div class="radio-container">
        <input
          type="radio"
          id="unsubscribed"
          name="subscription"
          value="unsubscribed"
          onClick={() => subscriptionClick(false)}
          checked={!subscribed}
        />
        <label for="unsubscribed">Unsubscribed</label>
      </div>
      <SaveButton
        {...{
          enableSave,
          isSaving,
          showError,
          className: "settings-button",
          clickHandler: () => saveNewSettingsData(newSettings),
        }}
      />
      <button class="settings-button save-button" onClick={logOutButtonHandler}>
        Log Out
      </button>
    </Fragment>
  );
}

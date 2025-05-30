import { renderSpinner } from "../../support/render-spinner";
import { useUserData } from "../../providers/user-data-provider";
import { SettingsContent } from "./settings-content";
import "./style.css";

export function Settings() {
  const { data, loading: isUserDataLoading } = useUserData();

  return (
    <div class="settings">
      <div class="title-row">
        <h1 class="title">Settings</h1>
        {renderSpinner(isUserDataLoading)}
      </div>

      {data?.userData ? (
        <SettingsContent data={data.userData} />
      ) : (
        !isUserDataLoading && (
          <p>
            You have to log in before you can view and/or change your
            settings... so do that!
          </p>
        )
      )}
    </div>
  );
}

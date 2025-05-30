import { useEffect } from "preact/hooks";
import { useAuth0 } from "../../auth/Auth0Provider";
import LoginButton from "./button";
import "./style.css";

const CSS_PADDING_VAR_NAME = "--page-padding-top";
const LOGGED_IN_PADDING = "92px";
const LOGGED_OUT_PADDING = "118px";

export function LoginInfo() {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      document.documentElement.style.setProperty(
        CSS_PADDING_VAR_NAME,
        LOGGED_IN_PADDING
      );
    } else {
      document.documentElement.style.setProperty(
        CSS_PADDING_VAR_NAME,
        LOGGED_OUT_PADDING
      );
    }
  }, [isAuthenticated]);

  if (!user) {
    return (
      <div class="info-container">
        <LoginButton />
      </div>
    );
  }

  return (
    <div class="info-container">
      <div class="info">Account: {user.name || user.email}</div>
      <a class="settings-link" href="/settings">
        Settings
      </a>
    </div>
  );
}

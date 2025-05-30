import { useAuth0 } from "../../auth/Auth0Provider";
import "./style.css";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  function clickHandler() {
    if (isAuthenticated) {
      logout();
    } else {
      loginWithRedirect();
    }
  }

  return (
    <div class="container">
      <button class="login" onClick={clickHandler}>
        {isLoading ? `Loading...` : "Log In"}
      </button>
    </div>
  );
}

export default LoginButton;

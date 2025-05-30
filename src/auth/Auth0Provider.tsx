import { createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import {
  Auth0Client,
  GetTokenSilentlyOptions,
  GetTokenWithPopupOptions,
  LogoutOptions,
  RedirectLoginOptions,
  User,
} from "@auth0/auth0-spa-js";
import { createAuth0Client } from "@auth0/auth0-spa-js";
import { AUTH0_CONFIG } from "./auth0-config";

type Auth0ContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | undefined;
  loginWithRedirect: (options?: RedirectLoginOptions) => Promise<void>;
  logout: (options?: LogoutOptions) => void;
  getToken: (options?: GetTokenSilentlyOptions) => Promise<string>;
  getTokenWithPopup: (options?: GetTokenWithPopupOptions) => Promise<string>;
};

const Auth0Context = createContext<Auth0ContextType | null>(null);

export const useAuth0 = () => {
  const context = useContext(Auth0Context);
  if (!context) {
    throw new Error("useAuth0 must be used within an Auth0Provider");
  }
  return context;
};

export const Auth0Provider = ({
  children,
}: {
  children: preact.ComponentChildren;
}) => {
  const [auth0Client, setAuth0Client] = useState<Auth0Client | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const initAuth0 = async () => {
      const client = await createAuth0Client(AUTH0_CONFIG);
      setAuth0Client(client);

      // Check if we're in the middle of a redirect
      if (window.location.search.includes("code=")) {
        await client.handleRedirectCallback();
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }

      const isAuthenticated = await client.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await client.getUser();
        setUser(user);
        window.scrollTo(0, 0);
      }

      setIsLoading(false);
    };

    initAuth0();
  }, []);

  const loginWithRedirect = async (options?: RedirectLoginOptions) => {
    if (!auth0Client) return;
    await auth0Client.loginWithRedirect(options);
  };

  const logout = (options?: LogoutOptions) => {
    if (!auth0Client) return;
    auth0Client.logout(options);
  };

  const getToken = async (options?: GetTokenSilentlyOptions) => {
    if (!auth0Client) throw new Error("Auth0 client not initialized");
    return auth0Client.getTokenSilently(options);
  };

  const getTokenWithPopup = async (options?: GetTokenWithPopupOptions) => {
    if (!auth0Client) throw new Error("Auth0 client not initialized");
    return auth0Client.getTokenWithPopup(options);
  };

  const value = {
    isAuthenticated,
    isLoading,
    user,
    loginWithRedirect,
    logout,
    getToken,
    getTokenWithPopup,
  };

  return (
    <Auth0Context.Provider value={value}>{children}</Auth0Context.Provider>
  );
};

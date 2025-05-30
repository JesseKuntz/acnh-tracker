export const AUTH0_CONFIG = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN || "",
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || "",
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};

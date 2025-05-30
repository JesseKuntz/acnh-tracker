import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { Header } from "./components/header/header";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { Tracker } from "./pages/Tracker";
import { Monthly } from "./pages/Monthly";
import { NotFound } from "./pages/_404.jsx";
import { Auth0Provider } from "./auth/Auth0Provider";
import { UserDataProvider } from "./providers/user-data-provider";
import "./style.css";

export function App() {
  return (
    <Auth0Provider>
      <LocationProvider>
        <UserDataProvider>
          <Header />
          <main>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/settings" component={Settings} />
              <Route path="/tracker/:type" component={Tracker} />
              <Route path="/monthly" component={Monthly} />
              <Route default component={NotFound} />
            </Router>
          </main>
        </UserDataProvider>
      </LocationProvider>
    </Auth0Provider>
  );
}

render(<App />, document.getElementById("app"));

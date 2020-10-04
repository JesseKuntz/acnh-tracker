import { h, Component } from 'preact';
import { Router } from 'preact-router';

const netlifyIdentity = require('netlify-identity-widget');

import getSingleAccount from '../fauna/get-single-account';
import createAccount from '../fauna/create-account';

import Header from './header';

import Home from '../routes/home';
import Tracker from '../routes/tracker';
import Settings from '../routes/settings';
import Monthly from '../routes/monthly';

async function getSpecimenData(email) {
  let result = await getSingleAccount(email);

  if (!result) {
    result = await createAccount(email);
    window.open('https://ac-tracker.netlify.app/settings', '_blank');
  }

  return result || {};
}

function getAccountReference(accountData) {
  return accountData.ref ? accountData.ref.value.id : null;
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      specimenData: {},
      isLoading: false,
    };
  }

  clearSpecimenStyling() {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);

      const input = document.querySelector('#specimen-filter');

      if (input) {
        input.value = '';
      }
    }
  }

  /** Gets fired when the route changes.
   *	@param {Object} event	"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;

    this.clearSpecimenStyling();
  };

  setLockScroll() {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
  }

  clearLockScroll() {
    document.body.style.position = 'initial';
    const scrollY = document.body.style.top;
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }

  setModalStyling() {
    this.setLockScroll();
  }

  clearModalStyling() {
    this.clearLockScroll();
  }

  async setSpecimenData() {
    const user = netlifyIdentity.currentUser();

    if (user) {
      this.setState({ isLoading: true });
      const data = await getSpecimenData(user.email);
      this.setState({ specimenData: data }, () =>
        this.setState({ isLoading: false })
      );
    }
  }

  handleLogin() {
    netlifyIdentity.close();
    this.setSpecimenData();
  }

  handleLogout() {
    this.setState({ specimenData: {} });
  }

  componentDidMount() {
    netlifyIdentity.init();

    netlifyIdentity.on('open', () => this.setModalStyling());
    netlifyIdentity.on('close', () => this.clearModalStyling());

    netlifyIdentity.on('login', () => this.handleLogin());
    netlifyIdentity.on('logout', () => this.handleLogout());

    this.setSpecimenData();
  }

  render() {
    const accountReference = getAccountReference(this.state.specimenData);

    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Tracker
            path="/tracker/:type"
            data={this.state.specimenData.data}
            accountRef={accountReference}
            isLoading={this.state.isLoading}
          />
          <Settings
            path="/settings"
            accountRef={accountReference}
            data={this.state.specimenData.data}
            isLoading={this.state.isLoading}
          />
          <Monthly
            path="/monthly"
            data={this.state.specimenData.data}
            isLoading={this.state.isLoading}
          />
        </Router>
      </div>
    );
  }
}

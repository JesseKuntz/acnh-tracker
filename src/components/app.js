import { h, Component } from 'preact';
import { Router } from 'preact-router';
const netlifyIdentity = require('netlify-identity-widget');

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Tracker from '../routes/tracker';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event	"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount() {
		netlifyIdentity.init();

		netlifyIdentity.on('open', () => document.body.style.overflowY = 'hidden');
		netlifyIdentity.on('close', () => document.body.style.overflowY = 'initial');

		netlifyIdentity.on('login', () => netlifyIdentity.close());
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Tracker path="/tracker/:type" />
				</Router>
			</div>
		);
	}
}

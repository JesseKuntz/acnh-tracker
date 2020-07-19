import { h, Component } from 'preact';
import { Router } from 'preact-router';
const netlifyIdentity = require('netlify-identity-widget');

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Tracker from '../routes/tracker';

export default class App extends Component {
	clearSpecimenStyling() {
		window.scrollTo(0, 0);

		const input = document.querySelector('#specimen-filter');

		if (input) {
			input.value = '';
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

	resetZoom() {
		document.querySelector('[name="viewport"]').remove();
		document.querySelector('head').innerHTML += '<meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=0">';

		document.querySelector('[name="viewport"]').remove();
		document.querySelector('head').innerHTML +='<meta name="viewport" content="width=device-width, initial-scale=yes">';
	}

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

		this.resetZoom();
	}

	componentDidMount() {
		netlifyIdentity.init();

		netlifyIdentity.on('open', () => this.setModalStyling());
		netlifyIdentity.on('close', () => this.clearModalStyling());

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

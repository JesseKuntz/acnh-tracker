import { h, Component } from 'preact';
import style from './style';

export default class Tracker extends Component {
	state = {};

	componentDidMount() {}

	// Note: `type` comes from the URL, courtesy of our router
	render({ type }) {
		return (
			<div class={style.profile}>
				<h1 class={style.title}>{type}</h1>
				<p>Click each {type} to mark that you have caught it!</p>
			</div>
		);
	}
}

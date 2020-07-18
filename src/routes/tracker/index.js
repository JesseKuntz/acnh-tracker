import { h, Component } from 'preact';

import SpecimenContainer from '../../components/specimen/container'

import style from './style';

export default class Tracker extends Component {
	state = {};

	componentDidMount() {}

	render({ type }) {
		return (
			<div class={style.tracker}>
				<h1 class={style.title}>{type}</h1>
				<p>Click each {type} to mark that you have caught it!</p>
				<SpecimenContainer type={type} />
			</div>
		);
	}
}

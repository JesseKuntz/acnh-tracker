import { h, Component } from 'preact';

import SpecimenContainer from '../../components/specimen/container'

import style from './style';

function processType(type) {
	return type.replace('-', ' ');
}

export default class Tracker extends Component {
	state = {};

	render({ type }) {
		const processedType = processType(type);

		return (
			<div class={style.tracker}>
				<h1 class={style.title}>{processedType}</h1>
				<p>Click each {processedType} to mark that you have caught it!</p>
				<SpecimenContainer type={type} processedType={processedType} data={this.props.data} />
			</div>
		);
	}
}

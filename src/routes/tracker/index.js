import { h, Component } from 'preact';

import SpecimenContainer from '../../components/specimen/container'

import style from './style';

function processType(type) {
	return type.replace('-', ' ');
}

function renderSpinner(isLoading) {
	if (isLoading) {
		return (<div class={style['loadingio-spinner-dual-ball-ypssij3d88']}>
			<div class={style['ldio-57juryv5dwc']}>
				<div /><div /><div />
			</div>
		</div>);
	}
}

export default class Tracker extends Component {
	state = {};

	render({ type }) {
		const processedType = processType(type);

		return (
			<div class={style.tracker}>
				<div class={style['title-row']}>
					<h1 class={style.title}>{processedType}</h1>
					{renderSpinner(this.props.isLoading)}
				</div>

				<p>Click each {processedType} to mark that you have caught it!</p>
				<SpecimenContainer type={type} processedType={processedType} data={this.props.data} />
			</div>
		);
	}
}

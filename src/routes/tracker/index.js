import { h, Component, Fragment } from 'preact';

import SpecimenContainer from '../../components/specimen/container';

import style from './style';

function processType(type) {
  return type.replace('-', ' ');
}

function renderSpinner(isLoading) {
  if (isLoading) {
    return <div class={`${style.loader} ${style.margin}`} />;
  }

  return null;
}

function dataExists(data) {
  return !(!data || !Object.keys(data).length);
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

        {dataExists(this.props.data) ? (
          <Fragment>
            <p>
              Click each {processedType} to mark that you have caught it! Once
              you edit your catches, the save button will be enabled.
            </p>
            <SpecimenContainer
              type={type}
              processedType={processedType}
              data={this.props.data}
              accountRef={this.props.accountRef}
            />
          </Fragment>
        ) : (
          !this.props.isLoading && (
            <p>
              Click the log in button above to create an account and start
              tracking your catches!
            </p>
          )
        )}
      </div>
    );
  }
}

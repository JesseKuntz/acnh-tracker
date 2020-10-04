import { h } from 'preact';
import VerboseSpecimen from '../../../src/components/specimen/verbose-specimen';

import { shallow } from 'enzyme';

describe('VerboseSpecimen', () => {
  test('matches snapshot', () => {
    expect(
      shallow(
        <VerboseSpecimen
          type={'type'}
          image={'image'}
          name={'name'}
          location={'location'}
          time={'time'}
        />
      )
    ).toMatchSnapshot();
  });
});

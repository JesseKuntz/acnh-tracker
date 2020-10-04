import { h } from 'preact';
import SpecimenContainer from '../../../src/components/specimen/container';

import { shallow } from 'enzyme';

describe('SpecimenContainer', () => {
  test('matches snapshot', () => {
    expect(
      shallow(<SpecimenContainer data={{ fish: {} }} type={'fish'} />)
    ).toMatchSnapshot();
  });
});

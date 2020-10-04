import { h } from 'preact';
import Specimen from '../../../src/components/specimen';

import { shallow } from 'enzyme';

describe('Specimen', () => {
  test('matches snapshot', () => {
    expect(
      shallow(<Specimen type={'type'} image={'image'} name={'name'} />)
    ).toMatchSnapshot();
  });
});

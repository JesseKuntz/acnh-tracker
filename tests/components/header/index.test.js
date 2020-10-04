import { h } from 'preact';
import Header from '../../../src/components/header';

import { shallow } from 'enzyme';

describe('Header', () => {
  test('matches snapshot', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});

import { h } from 'preact';
import LoginInfo from '../../../src/components/login/info';

import { shallow } from 'enzyme';

describe('LoginInfo', () => {
  test('matches snapshot', () => {
    expect(shallow(<LoginInfo />)).toMatchSnapshot();
  });
});

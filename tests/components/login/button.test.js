import { h } from 'preact';
import LoginButton from '../../../src/components/login/button';

import { shallow } from 'enzyme';

describe('LoginButton', () => {
  test('matches snapshot', () => {
    expect(shallow(<LoginButton />)).toMatchSnapshot();
  });
});

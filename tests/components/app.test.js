import { h } from 'preact';
import App from '../../src/components/app';

import { shallow } from 'enzyme';

describe('App', () => {
  test('matches snapshot', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});

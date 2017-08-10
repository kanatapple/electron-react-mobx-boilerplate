import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('<App />', () => {
  it('is rendered without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});


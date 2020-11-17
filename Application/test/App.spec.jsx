import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../src/App';

it('Should contain text', () => {
    const wrapper = shallow(<App />)
   expect(wrapper.text());
})
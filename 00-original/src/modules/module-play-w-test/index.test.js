import React from 'react';
import { shallow } from 'enzyme';

import ModuleEntry from './index';
const wrapper = shallow(<ModuleEntry />);
const wrapper_props = Object.keys(wrapper);

console.log(wrapper_props);
test('adds 1 + 2 to equal 3', () => {
    expect(3).toBe(3);
});



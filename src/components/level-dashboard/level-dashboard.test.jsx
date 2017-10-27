import React from 'react';
import LevelDashboardComponent from './level-dashboard';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });
jest.mock('./level-dashboard.css', () => jest.fn());

test('It should generate a div displaying the amount of diamonds', () => {
    const diamonds = 10;
    const component = shallow(
        <LevelDashboardComponent diamonds={diamonds}/>
    );
    expect(component.text()).toEqual(diamonds);
});

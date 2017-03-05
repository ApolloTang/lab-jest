import React from 'react';
import {
    shallow
}
from 'enzyme';

import TestUtils from 'react-addons-test-utils';
import IndicatorComponent from './index';
import TriggerAnAction from './action';

var Indicator;

jest.unmock('./index');
jest.useFakeTimers();

describe('Indicator', function() {
    beforeEach(function() {
        Indicator = TestUtils.renderIntoDocument(<IndicatorComponent />);
    });

    it('setInterval is called when _onChange is called', function() {
        Indicator.setInterval = jest.fn();

        // Manually call the real `_onChange`, which is supposed to set some
        // state and start the interval for `refresh` on a 1000ms interval.
        Indicator._onChange();
        expect(Indicator.state.elapsed).toBe(5);
        expect(Indicator.setInterval.mock.calls.length).toBe(1);                // setInterval() is called once
        expect(typeof Indicator.setInterval.mock.calls[0][0]).toBe('function'); // setInterval first arg is a funciotn
        expect(Indicator.setInterval.mock.calls[0][1]).toBe(1000);              // second argument is 1000
    });

    it('waits 1 second foreach tick', function() {
        const spy = jest.spyOn(Indicator, 'refresh');
        // Manually call the real `_onChange`, which is supposed to set some
        // state and start the interval for `refresh` on a 1000ms interval.
        Indicator._onChange();
        expect(Indicator.state.elapsed).toBe(5);
        expect(spy).not.toBeCalled(); // Now we make sure `refresh` hasn't been called yet.

        // However, we do expect it to be called on the next interval tick.
        jest.runOnlyPendingTimers();
        expect(spy).toBeCalled();
    });

    it('decrements elapsed by one each time refresh is called', function() {
        // We've already determined that `refresh` gets called correctly; now
        // let's make sure it does the right thing.
        Indicator._onChange();
        expect(Indicator.state.elapsed).toBe(5);
        Indicator.refresh();
        expect(Indicator.state.elapsed).toBe(4);
        Indicator.refresh();
        expect(Indicator.state.elapsed).toBe(3);
    });

    it('calls TriggerAnAction when elapsed reaches zero', function() {
        const spy = jest.spyOn(Indicator, 'handleCounterHitZero');
        Indicator.setState({
            elapsed: 1
        });
        Indicator.refresh();
        expect(Indicator.state.elapsed).toBe(0);
        expect(spy).toBeCalled();
    });
});

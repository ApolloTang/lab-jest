// if (process && process.env && process.env.CONSOLE_LOG) {
//     console.info('log from file: src/modules/module-a/index.js'); // eslint-disable-line no-console
// }

import React, {Component} from 'react';
import style from './style.less';
import TriggerAnAction from './action';

// fake MyStore just so the example runs.
var MyStore = {
    addChangeListener: function() {},
    removeChangeListener: function() {}
};

var SetIntervalMixin = {
    componentWillMount: function() {
        this.interval = null;
    },
    setInterval: function() {
        this.interval = setInterval.apply(null, arguments);
    },
    clearInterval: function(id) {
        clearInterval(this.interval);
        this.interval = null;
    },
    componentWillUnmount: function() {
        this.clearInterval();
    }
};

var Indicator = React.createClass({
    mixins: [SetIntervalMixin],

    getInitialState: function() { return { elapsed: this.props.rate }; },
    getDefaultProps: function() { return { rate: 5 }; },

    propTypes: { rate: React.PropTypes.number.isRequired },

    componentDidMount: function() { MyStore.addChangeListener(this._onChange); },
    componentWillUnmount: function() { MyStore.removeChangeListener(this._onChange); },

    refresh: function() {
        this.setState({
            elapsed: this.state.elapsed - 1
        })

        if (this.state.elapsed == 0) {
            this.clearInterval();
            this.handleCounterHitZero();
        }
    },
    handleCounterHitZero: ()=>{
        TriggerAnAction();
    },
    fakeStoreChange: function() {
        this._onChange();
    },

    render: function() {
        return (
            <div>
                <button onClick={this.fakeStoreChange}>fake store change</button>
                <p>{this.state.elapsed}s</p>
            </div>
        );
    },

    /**
     * Event handler for 'change' events coming from MyStore
     */
    _onChange: function() {
        this.setState({
            elapsed: this.props.rate
        });
        if (this.interval) this.clearInterval();
        this.setInterval(this.refresh, 1000);
    }

});

export default Indicator;



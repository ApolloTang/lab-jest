if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';
import ModuleA from 'modules/module-a';
import FontTest from 'modules/font-test';

import style from './style';
class Root extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return(
            <div className={style['module-style']}>
                <p>Root Component</p>
                <ModuleA />
            </div>
        )
    }
}

export default Root;




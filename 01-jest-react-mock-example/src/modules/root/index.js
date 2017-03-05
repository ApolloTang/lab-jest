if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: modules/root/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';
import SoJestReactMockEg from 'modules/so-jest-react-mock-example';

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
                <SoJestReactMockEg />
            </div>
        )
    }
}

export default Root;




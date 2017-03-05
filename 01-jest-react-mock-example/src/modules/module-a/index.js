if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/module-a/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style.less';
class ModuleRoot extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`module-a ${style['module-style']}`} >
                <p> Module A </p>
            </div>
        );
    }
}

export default ModuleRoot;



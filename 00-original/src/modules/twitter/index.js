if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/twitter/index.jsx'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';
import imgUri_twitter from './img_01.png';

class ModuleRoot extends Component {
    render() {
        return (
            <div className={`twitter ${style['module-style']}`} >
                <img src={imgUri_twitter} />
            </div>
        )
    }
};

export default ModuleRoot;







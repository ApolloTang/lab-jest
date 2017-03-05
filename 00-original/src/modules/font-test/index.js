if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/modules/font-test/index.js'); // eslint-disable-line no-console
}

import React, {Component} from 'react';

import style from './style';

class ModuleRoot extends Component {
    render() {
        return (
            <div className={`font-test ${style['module-style']}`}>
                <h3>This is a module to test font</h3>
                <p>Default</p>
                <p className="thin">RobotoThin</p>
                <p className="light">RobotoLight</p>
                <p className="regular">RobotoRegular</p>
                <p className="medium">RobotoMedium</p>
                <p className="bold">RobotoBold</p>
                <p className="black">RobotoBlack</p>
            </div>
       );
    }
};

export default ModuleRoot;




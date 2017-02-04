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
            module_twitter:null
        }
    }
    handleClick_lazyLoad() {
        if (this.state.module_twitter === null) {
            console.log('Lazy load modules/twitter...'); // eslint-disable-line no-console
            System.import('modules/twitter').then(
                ({default: Twitter}) => {
                    console.log('Loaded modules is: ', Twitter); // eslint-disable-line no-console
                    this.setState({module_twitter:(<Twitter />)});
                },
                err => {
                    console.log('Loading module <Twitter/> fail') // eslint-disable-line no-console
                }
            );
        }
    }
    render() {
        return(
            <div className={style['module-style']}>
                <p>Root Component</p>
                <button onClick={this.handleClick_lazyLoad.bind(this)}>click to lazy load</button>
                <div className="lazy-load-container">
                    { this.state.module_twitter ? this.state.module_twitter : null }
                </div>
                <ModuleA />
                <FontTest />
            </div>
        )
    }
}

export default Root;




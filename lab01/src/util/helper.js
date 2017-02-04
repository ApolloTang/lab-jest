if (process && process.env && process.env.CONSOLE_LOG) {
    console.info('log from file: src/util/helper.js'); // eslint-disable-line no-console
}

function doHeavyLifting () { return 'done heavy lifting.' }

export {doHeavyLifting};

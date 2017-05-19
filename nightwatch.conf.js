module.exports = (function (settings) {
    if (process.platform === 'win32') {
        settings.selenium.cli_args['webdriver.chrome.driver'] += '.exe';
    }
    return settings;
})(require('./nightwatch.json'));
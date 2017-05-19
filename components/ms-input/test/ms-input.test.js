module.exports = {
    'input value': function (browser) {
        browser
            .url(browser.launchUrl + '/components/ms-input/test/ms-input.test.html')
            .waitForElementVisible('input', 1000)
            .assert.value('input', '123');
    },
    'form and validate': function (browser) {
        browser
            .assert.containsText('pre', '{"name":"123"}')
            .setValue('input', '4')
            .assert.containsText('pre', '{"name":"1234"}')
            .keys([1,2,3,4].map(function (n) { return browser.Keys.BACK_SPACE }))
            .assert.attributeContains('.form-group', 'class', 'has-error')
            .assert.visible('small.help-block')
            .assert.containsText('small.help-block', '请输入名字')
            .end();
    }
};
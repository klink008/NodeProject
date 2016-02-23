(function(){
    'use strict';

    var LoginPage = function(){
        browser.get('localhost:3000')
    };

    LoginPage.prototype = Object.create({},{
        username        : {get: function(){return element(by.id('username'))}},
        password        : {get: function(){return element(by.id('password'))}},
        submit          : {get: function(){return element(by.id('submit'))}},

        inputCredentials   : {value: function(username, password){
            this.username.sendKeys(username);
            this.password.sendKeys(password);
        }},
        submitForm      : {value: function(){
            this.submit.click();
        }}
    });

    module.exports = LoginPage;
})();
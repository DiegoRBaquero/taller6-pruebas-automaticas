var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password);
  });

  When(/^I fill random info/ , () => {
    var cajaSignUp = browser.element('.cajaSignUp');

    var nombreInput = cajaSignUp.element('input[name="nombre"]');
    nombreInput.click();
    nombreInput.keys('test');

    var apellidoInput = cajaSignUp.element('input[name="apellido"]');
    apellidoInput.click();
    apellidoInput.keys('test');

    var mailInput = cajaSignUp.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(`test${Math.floor(Math.random() * 100000000)}@test.com`);

    var deptoSelect = cajaSignUp.element('select[name="idDepartamento"]');
    deptoSelect.selectByIndex(Math.floor(Math.random()*30))

    var passwordInput = cajaSignUp.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('' + Math.floor(Math.random() * 99999999 + 10000000));
  });

  When('I click accept', () => {
    browser.waitForVisible('select[name="idUniversidad"]', 5000);
    browser.click('input[name="acepta"]');
  });

  Then('I expect to see {string}', error => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
    var alertText = browser.element('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
  });

  Then('I expect to view error sign', () => {
    browser.waitForVisible('.glyphicon.glyphicon-remove', 5000);
  });

  Then('I expect to view error message', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  When('I try to sign up', () => {
    var cajaLogIn = browser.element('.cajaSignUp');
    cajaLogIn.element('button=Registrarse').click()
  });

  Then('I expect to be able to logout', () => {
    browser.waitForVisible('button#cuenta', 5000);
  });
});


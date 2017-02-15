'use strict';

const ApiBuilder = require('claudia-api-builder');
const api = new ApiBuilder();

module.exports = api;

api.get('/helloworld', (request) => {
  return {
    firstName: 'Daniel',
    lastName: 'Persson',
    phoneNo: '070-12345678'
  };
});

api.get('/helloworld2', (request) => {
  return {
    message: 'Sicket tjat!'
  };
});

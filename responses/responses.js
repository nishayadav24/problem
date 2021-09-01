/**
 * Created by sumeet on 22/09/20.
 */

'use strict';

const brotli                      = require("brotli");

const constants                   = require('./responseConstants');


const parameterMissingResponse = (res, err, data) => {
  let response = {
    message: err || constants.responseMessages.PARAMETER_MISSING,
    status : constants.responseStatus.BAD_REQUEST,
    data   : data || {}
  };
  this.sendResponse(res, response);
};

const invalidAuthKey = (res, data, msg) => {
  let response = {
    message: constants.responseMessages.INVALID_AUTH_KEY,
    status : constants.responseStatus.UNAUTHORIZED,
    data   : data || {}
  };
  this.sendResponse(res, response);
};

const sessionExpired = (res, data) => {
  let response = {
    message: constants.responseMessages.SESSION_EXPIRED,
    status : constants.responseStatus.SESSION_EXPIRED,
    data   : data || {}
  };
  this.sendResponse(res, response);
};

const unauthorized = (res, data) => {
  let response = {
    message: constants.responseMessages.UNAUTHORIZED,
    status : constants.responseStatus.UNAUTHORIZED,
    data   : data || {}
  };
  this.sendResponse(res, response);
};

const internalServerError = (res, data) => {
  let response = {
    message: constants.responseMessages.INTERNAL_SERVER_ERROR,
    status : constants.responseStatus.INTERNAL_SERVER_ERROR,
    data   : data || {}
  };
  this.sendResponse(res, response);
};

const success = (res, data, message) => {
  let response = {
    message: message || constants.responseMessages.SUCCESS,
    status : constants.responseStatus.SUCCESS,
    data   : data || {}
  };
  this.sendResponse(res, response);
};

const failure = (res, data, message) => {
  let response = {
    message: message || constants.responseMessages.FAILURE,
    status : constants.responseStatus.UNAUTHORIZED,
    data   : data || {}
  };
  this.sendResponse(res, response);
};

const inactiveAccount = (res, data, message) => {
  let response = {
    message: message || constants.responseMessages.ACCOUNT_INACTIVE,
    status : constants.responseStatus.UNAUTHORIZED,
    data   : data || {}
  };
  this.sendResponse(res, response);
};


const sendResponse = (res, data, isCompressed = 0) => {
  let response = JSON.stringify({
    message: data.message,
    status : data.status,
    data   : data.data
  });
  response = isCompressed? brotli.compress(response) : response;
  isCompressed ?
    res.set('Content-Encoding', 'br').status(data.status).send(response) :
    res.status(data.status).send(response);
};

const alreadyExists = (res, data) => {
  let response = {
    message: constants.responseMessages.ALREADY_EXITS,
    status : constants.responseStatus.CONFLICT,
    data   : data || {}
  };
  this.sendResponse(res, response);
};

const noDataFound = (res, data) => {
  let response = {
    message: constants.responseMessages.NOT_FOUND,
    status : constants.responseStatus.CONFLICT,
    data   : data || {}
  };
  this.sendResponse(res, response);
};


exports.parameterMissingResponse  = parameterMissingResponse;
exports.invalidAuthKey            = invalidAuthKey;
exports.sessionExpired            = sessionExpired;
exports.unauthorized              = unauthorized;
exports.internalServerError       = internalServerError;
exports.success                   = success;
exports.failure                   = failure;
exports.inactiveAccount           = inactiveAccount;
exports.sendResponse              = sendResponse;
exports.alreadyExists             = alreadyExists;
exports.noDataFound               = noDataFound;

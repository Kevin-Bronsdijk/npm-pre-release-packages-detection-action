'use strict';

const fs = require('fs');
const {Package} = require('./models');

const readPackageFile = (path) => {
  return fs.readFileSync(path);
};

const parsePackageFile = (rawData) => {
  return JSON.parse(rawData);
};

const getPackages = (obj) => {
  const packages = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const error = new Package(key, obj[key]);
      if (error) packages.push(error);
    }
  }
  return packages;
};

module.exports = {
  readPackageFile,
  parsePackageFile,
  getPackages,
};

"use strict";
const dotenv = require("dotenv");
const assert = require("assert");

//gets the enviorment variables
dotenv.config();

//destructuring the variables
const {
  PORT,
  HOST,
  HOST_URL,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

const config = {
  PORT: PORT,
  HOST: HOST,
  HOST_URL: HOST_URL,
  MONGO_PASSWORD: MONGO_PASSWORD,
  MONGO_USERNAME: MONGO_USERNAME
};


module.exports = config;
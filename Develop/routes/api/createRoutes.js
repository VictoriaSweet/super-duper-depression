const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const Model = require('../models/thoughts');
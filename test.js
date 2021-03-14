const fetch = require('node-fetch');
const $ = require('cheerio');

fetch('https://timetables.bcitsitecentre.ca/business')
  .then((res) => res.text())
  .then((html) => console.log($('div > h4', html)));

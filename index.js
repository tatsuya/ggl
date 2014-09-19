#!/usr/bin/env node
'use strict';

var parseArgs = require('minimist');
var color = require('colo');
var google = require('googleapis');
var customsearch = google.customsearch('v1');

/**
 * Search on Google.
 *
 * @param {Object} params - Parameters for request
 * @param {String} params.auth - The search API key.
 * @param {String} params.cx - The custom search engine ID to scope this search query.
 * @param {Number} params.num - Number of search results to return.
 * @param {String} params.q - Query.
 */
function search(params) {
  customsearch.cse.list(params, function(err, res) {
    if (err) {
      console.log('An error occured', err);
      return;
    }
    // Got the response from custom search
    if (res.items && res.items.length > 0) {
      for (var i = 0; i < res.items.length; i++) {
        var item = res.items[i];
        console.log(color.blue.bold(item.title));
        console.log(color.green(item.link));
        console.log(item.snippet);
        console.log();
      }
    }
  });
}

var commands = {};

/**
 * Show help.
 */
commands.help = function() {
  [
    '',
    '  ggl: A command-line based google search client.',
    '',
    '  Usage:',
    '',
    '     ggl help                  Print help',
    '     ggl search [keywords..]   Search on google',
    '',
    '  Examples:',
    '',
    '     ggl search iphone 6',
    '',
    '  Environment variables:',
    '',
    '    GOOGLE_API_KEY                   Specify your API key',
    '    GOOGLE_CUSTOM_SEARCH_ENGINE_ID   Specify your custom search engine ID',
    ''
  ].forEach(function(line) {
    console.log(line);
  });
};

commands.search = function(argv) {
  var keywords = argv._;
  if (!keywords.length) {
    console.log('keywords required. Try `ggl help`.');
    return;
  }

  var q = keywords.join(' ');

  // You can get a custom search engine id at
  // https://www.google.com/cse/create/new
  var cx = process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID
    ? process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID
    : '003501755256504697117:s4d3cpd3kck';

  // Put your API key here
  var auth = process.env.GOOGLE_API_KEY
    ? process.env.GOOGLE_API_KEY
    : 'AIzaSyCxXtTGTOiQgl0lBOp3UF_ongRI00sUnzg';

  var params = {
    auth: auth,
    cx: cx,
    num: 5,
    q: q
  };

  search(params);
};

var argv = parseArgs(process.argv.slice(2));

if (argv['h'] || argv['help']) {
  commands.help();
  return;
}

var command = argv._.shift() || 'help';

if (commands[command]) {
  commands[command](argv);
} else {
  commands.help();
}
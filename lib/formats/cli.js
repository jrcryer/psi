'use strict';

var chalk = require('chalk');
var utils = require('../utils');

exports.render = function (overview, statistics, ruleSetResults) {

  var renderOverview = function(overview) {
    var item,
        color,
        section = [];

    for(var i = 0; i < overview.length; i++) {
      item = overview[i];
      color = i === 1 ? utils.scoreColor(item.value) : chalk.cyan;
      section.push(item.label + utils.buffer(item.label, 12) + color(item.value));
    }
    return section.join('\n') + '\n';
  };

  var renderSection = function(data) {
    var section = [];

    for(var i = 0; i < data.length; i++) {
      var item = data[i];
      section.push(utils.labelize(item.label) + chalk.cyan(item.value));
    }
    return section.join('\n');
  };

  console.log([
    utils.divider,
    renderOverview(overview),
    renderSection(statistics),
    utils.labelize(''),
    renderSection(ruleSetResults),
    utils.divider
  ].join('\n'));
};

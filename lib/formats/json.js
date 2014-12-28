'use strict';

var _     = require('lodash');
var utils = require('../utils');

exports.render = function (overview, statistics, ruleSetResults) {

  var mapSection = function(section) {
    return utils.firstToUpperCaseAndAddSpace(section.label);
  };

  overview = _.zipObject(_.map(overview, 'label'), _.map(overview, 'value'));
  statistics = _.zipObject(_.map(statistics, mapSection), _.map(statistics, 'value'));
  ruleSetResults = _.zipObject(_.map(ruleSetResults, mapSection), _.map(ruleSetResults, 'value'));
  console.log(_.extend({}, {'overview': overview}, {'statistics': statistics}, {'ruleResults': ruleSetResults}));
};

/**
 * Author: Diego Castillo
 * Company: Workouter
 * Description: Handlebars helpers
 */
define([
  'jquery',
  'underscore',
  'handlebars',
  'lang/en_locale'
], function($, _, Handlebars, enLocale) {

  'use strict';

  Handlebars.registerHelper('beautify_date', function(options) {
    var timeAgo = new Date(parseInt(options.fn(this))),
        days = enLocale.daysNames[0],
        months = enLocale.monthsNames[0];

    var dayNumber = timeAgo.getDay() + 1,
        dayName = days[ timeAgo.getDay() ],
        monthName = months[ timeAgo.getMonth() ];

    return dayName + ', '  + dayNumber + ' ' + monthName;
  });

});

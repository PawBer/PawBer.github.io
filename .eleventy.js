const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {
    // Copy img/
    eleventyConfig.addPassthroughCopy("img");
    // Copy CSS
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("_headers");
    
    eleventyConfig.addPassthroughCopy("kalkulator");

    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('LL'); // E.g. May 31, 2019
      });
  };

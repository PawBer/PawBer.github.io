const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // Copy img/
    eleventyConfig.addPassthroughCopy("img");
    // Copy CSS
    eleventyConfig.addPassthroughCopy("css");
    
    eleventyConfig.addPassthroughCopy("kalkulator");
    eleventyConfig.addPassthroughCopy("kalkulator/static");

    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('LL'); // E.g. May 31, 2019
      });
  };

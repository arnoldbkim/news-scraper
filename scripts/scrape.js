//Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");


var BASEURL = "https://www.nytimes.com";
var scrape = function() {
    return axios.get("https://www.nytimes.com/en/latest/all.html").then(function(res) {
      
      var $ = cheerio.load(res.data);
      var articles = [];
      $("div.f1-latest-listing--grid-item").each(function(i, element) {
  
          var dataToAdd = {
            headline: head,
            // summary: sumNeat,
            url: BASEURL + url
            
          };
  
          articles.push(dataToAdd);
          console.log(dataToAdd);
         
        // }
      });
      return articles;
    
      
    });
    
  };

module.exports = scrape;
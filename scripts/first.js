require('dotenv').config();

var parseString = require('xml2js').parseString;

module.exports = first

function first(robot) {
  robot.hear(/kissing countdown/i, function(res) {
    var arrival = new Date('June 10 2016').getTime();
    var now = new Date().getTime();
    var daysLeft = Math.floor((arrival - now) / (1000 * 60 * 60 * 24));
    res.send(daysLeft + ' days until it\'s kissing time for Taco and Pretzel');
  });

  robot.hear(/pandesal/i, function(res) {
    res.send('Who cares about Pandesal? No offense but I think I\'m the better assistant');
  });

  robot.hear(/deckard/i, function(res) {
    res.send('Woof!');
  });

  robot.hear(/book rating: (.*)/i, function(res) {
    var bookQuery = res.match[1];

    var goodreadsKey = process.env.GOODREADS_KEY;
    var url = 'https://www.goodreads.com/book/title.xml?key=' + goodreadsKey + '&title=' + bookQuery;

    robot.http(url).get()(function(err, response, body) {
      if (!err) {
        parseString(body, function(err, result) {
          var book = result.GoodreadsResponse.book[0];

          res.send('Goodreads rating for ' + book.title + ': ' +  book.average_rating);
        });
      } else {
        console.log('error', err);
      }
    });
  });

  robot.hear(/movie rating: (.*)/i, function(res) {
    var movieQuery = res.match[1];

    var url = 'http://www.omdbapi.com/?t=' + movieQuery;

    robot.http(url).get()(function(err, response, body) {
      if (!err) {
        var movie = JSON.parse(body);

        var message = 'IMDB Rating for ' + movie.Title + ': ' + movie.imdbRating;

        if (movie.Poster) message + ' (' + movie.Poster + ')'

        res.send(message);
      } else {
        console.log('error', err);
      }
    });
  });

  robot.hear(/weather forecast: (.*)/i, function(res) {
    var location = res.match[1];

    var openweathermapKey = process.env.OPENWEATHERMAP_KEY;
    var url = 'http://api.openweathermap.org/data/2.5/weather?APPID=' + openweathermapKey + '&q=' + location;

    robot.http(url).get()(function(err, response, body) {
      if (!err) {
        var forecast = JSON.parse(body);

        res.send('Weather forecast for ' + forecast.name + ': ' +  forecast.weather[0].description);
      } else {
        console.log('error', err);
      }
    });
  });
}

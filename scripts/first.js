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
    res.send('Searching for ratings for ' + bookQuery);

    var goodreadsKey = process.env.GOODREADS_KEY;
    var url = 'https://www.goodreads.com/book/title.xml?key=' + goodreadsKey + '&title=' + bookQuery;

    robot.http(url).get()(function(err, response, body) {
      if (!err) {
        parseString(body, function(err, result) {
          var book = result.GoodreadsResponse.book[0];

          res.send(book.title + ': ' +  book.average_rating);
        });
      } else {
        console.log('error', err);
      }
    });
  });
}

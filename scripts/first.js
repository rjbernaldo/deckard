module.exports = first

function first(robot) {
  robot.hear(/kissing countdown/i, function(res) {
    var arrival = new Date('June 10 2016').getTime();
    var now = new Date().getTime();
    var daysLeft = Math.floor((arrival - now) / (1000 * 60 * 60 * 24));
    res.send(daysLeft + ' until it\'s kissing time for Taco and Pretzel');
  });

  robot.hear(/pandesal/i, function(res) {
    res.send('Who cares about Pandesal? No offense but I think I\'m the better assistant');
  });
}

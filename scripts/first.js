module.exports = first

function first(robot) {
  robot.hear(/test/i, function(res) {
    res.send('I\'m here!');
  });
}

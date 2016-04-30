module.exports = initial

function initial(robot) {
	robot.hear(/test/i, function(res) {
		res.send('test');
	});
}

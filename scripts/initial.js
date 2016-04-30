module.exports = initial

function initial(robot) {
	robot.hear(/deckard/i, function(res) {
		res.send('woof!!');
	});

	robot.hear(/.deckard hi/i, function(res) {
		res.send('https://scontent.fmnl2-1.fna.fbcdn.net/t39.1997-6/p64x64/851556_499671063448730_199601500_n.png');
	});
}

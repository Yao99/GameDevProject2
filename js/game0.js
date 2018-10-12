let game0State = function(){

};

game0State.prototype.create = function(){
	game.add.sprite(0, 0, "BlueW");
	this.BG = game.add.sprite(155.5, 137.5, "DuckBG");
	this.BG.animations.add("only", [0, 1], 5, true);
	this.BG.animations.play("only");

	this.player = game.add.sprite(155.5, 137.5, "Duck");
	this.player.animations.add("only", [0, 1], 5, true);
	this.player.animations.play("only");
	
};

game0State.prototype.update = function(){

};


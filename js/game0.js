let game0State = function(){

};

game0State.prototype.create = function(){
	this.BG = game.add.sprite(0, 0, "DuckBG");
	this.BG.animations.add("only", [0, 1], 5, true);
	this.BG.animations.play("only");

	
};

game0State.prototype.update = function(){

};


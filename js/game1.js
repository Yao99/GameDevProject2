let game1State = function(){

};
//1000 626 203 

game1State.prototype.create = function(){
	this.WBG = game.add.sprite(0, 0, "GoldW");
	this.BG = game.add.sprite(155.5, 137.5, "Acting");
	button0 = game.add.button(820, 250, "ComB", actionOnClick1, this, 0, 0, 0);
	button1 = game.add.button(1550, 250, "TraB", actionOnClick1, this, 0, 0, 0);

	this.player = game.add.sprite(1050, 250, "Intro");
	anim = this.player.animations.add("Intro_", [0, 1, 2], 2, false);
	anim.onComplete.add(animationStopped, this);
	anim.play();
	counter = 0;
	finished = false;
};

game1State.prototype.update = function(){
	counter++;
	if(counter == 100 && finished){
		this.player.kill();
	}
};

	
function animationStopped(sprite, animation) {
	this.player.kill();
    this.player = game.add.sprite(1050, 250, "Wave");
    anim = this.player.animations.add("Wave", [0, 1, 2, 3, 4, 5, 0], 2, false);
    anim.play();
    anim.onComplete.add(animationStopped1, this);
}
function animationStopped1(sprite, animation) {
	this.player.kill();
    this.player = game.add.sprite(1050, 250, "Intro");
	anim = this.player.animations.add("Intro_", [0, 1, 2], 2, false);
    anim.play();
}
function actionOnClick1 () {

    anim.play();

}


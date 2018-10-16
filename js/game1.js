let game1State = function(){

};
//1000 626 203 169

game1State.prototype.create = function(){
	this.WBG = game.add.sprite(0, 0, "GoldW");
	this.BG = game.add.sprite(155.5, 137.5, "Acting");
	button0 = game.add.button(820, 250, "ComB", actionOnClick2, this, 0, 0, 0);
	button1 = game.add.button(1550, 250, "TraB", actionOnClick1, this, 0, 0, 0);
	Tra = null;
	Com = null;
	game.time.events.loop(Phaser.Timer.SECOND, checktime, this);
	this.player = game.add.sprite(1050, 250, "Intro");
	anim = this.player.animations.add("Intro_", [0, 1, 2], 3, false);
	anim.onComplete.add(animationStopped, this);
	anim.play();
	this.counter = 0;
	Act = -1;
	
};

game1State.prototype.update = function(){

	
};

	
function animationStopped(sprite, animation) {
	this.player.kill();
    this.player = game.add.sprite(1050, 250, "Wave");
    anim = this.player.animations.add("Wave_", [0, 1, 2, 3, 4, 5, 0], 3, false);
    anim.play();
    anim.onComplete.add(animationStopped1, this);
}
function animationStopped1(sprite, animation) {
	this.player.kill();
    this.player = game.add.sprite(1050, 250, "Actions");
	Tra = this.player.animations.add("Actions_Tra", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 4, false);
	Com = this.player.animations.add("Actions_Tra", [24, 25, 26, 27, 28, 29, 30, 31, 32, 33], 4, false);
	this.bubbles = game.add.group();

}

function actionOnClick1 () {
	if(Tra!=null){
		Tra.play();
	}  
}

function actionOnClick2 () {
    if(Com!=null){
    	Com.play();
    }
}


function checktime(){
    this.counter++;
    if(this.counter == 5){
       let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "TraL");
       let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "ComL");
       let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "TraL");
       let bubble3 = this.bubbles.create(270 + 203 * 4, 585, "TraR");
       let bubble4 = this.bubbles.create(270 + 203 * 5, 585, "TraR");
       let bubble5 = this.bubbles.create(270 + 203 * 6, 585, "ComR");
    }
}

// preloadState.level_num = 0;
// game.state.start("Trans");


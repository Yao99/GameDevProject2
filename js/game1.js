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
	game.time.events.loop(Phaser.Timer.SECOND, checktime_1, this);
	this.player = game.add.sprite(1050, 250, "Intro");
	anim = this.player.animations.add("Intro_", [0, 1, 2], 3, false);
	anim.onComplete.add(animationStopped, this);
	anim.play();
	this.counter_1 = 0;
	this.correct_1 = 0;
	this.Act = -1;
	Wrong = game.add.audio("incorrect");
	Right = game.add.audio("correct");
	Fart = game.add.audio("fart");
	
	Medieval = game.add.audio("medieval");
	Medieval.play();
	this.scoreText_1 = game.add.text(16, 16, "Correct: 0", {fontSize: '32px', fill: '#000'});
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
		if(this.Act != 0){
			Wrong.play();
		}
		else{
			Right.play();
			this.correct_1++;
			this.scoreText_1.text = "Correct: " + this.correct_1;
		}
	}  
}

function actionOnClick2 () {
    if(Com!=null){
    	Com.play();
		Fart.play();
    	if(this.Act != 1){
			Wrong.play();
		}
		else{
			Right.play();
			this.correct_1++;
			this.scoreText_1.text = "Correct: " + this.correct_1;
		}
    }
}


function checktime_1(){
    this.counter_1++;
    if(this.counter_1 == 5){
       let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "TraL");
       let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "ComL");
       let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "TraL");
       let bubble3 = this.bubbles.create(270 + 203 * 4 + 80, 585, "TraR");
       let bubble4 = this.bubbles.create(270 + 203 * 6 - 110, 585, "TraR");
       let bubble5 = this.bubbles.create(270 + 203 * 7 - 110, 585, "ComR");
       let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "ComR");
       this.Act = 0;
    }
    if(this.counter_1 == 7){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 9){
       let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "ComL");
       let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "ComL");
       let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "TraR");
       this.Act = 1;
    }
    if(this.counter_1 == 12){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 14){
    	let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "TraL");
        let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "TraL");
        let bubble4 = this.bubbles.create(270 + 203 * 6 - 110, 585, "TraR");
        let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "TraR");
    	this.Act = 0;
    }
    if(this.counter_1 == 16){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 18){
    	let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "TraL");
        let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "ComL");
        let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "TraR");
        let bubble3 = this.bubbles.create(270 + 203 * 4 + 80, 585, "ComR");
        let bubble4 = this.bubbles.create(270 + 203 * 6 - 110, 585, "TraR");
        let bubble5 = this.bubbles.create(270 + 203 * 7 - 110, 585, "ComR");
        let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "TraR");
        this.Act = 0;
    }
    if(this.counter_1 == 21){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 23){
    	let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "TraL");
        let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "TraL");
        let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "TraL");
        let bubble3 = this.bubbles.create(270 + 203 * 4 + 80, 585, "TraR");
        let bubble4 = this.bubbles.create(270 + 203 * 6 - 110, 585, "TraR");
        let bubble5 = this.bubbles.create(270 + 203 * 7 - 110, 585, "ComR");
        let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "TraR");
        this.Act = 0;
    }
    if(this.counter_1 == 26){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 28){
    	let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "ComL");
        let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "ComL");
        let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "ComL");
        let bubble3 = this.bubbles.create(270 + 203 * 4 + 80, 585, "ComR");
        let bubble4 = this.bubbles.create(270 + 203 * 6 - 110, 585, "ComR");
        let bubble5 = this.bubbles.create(270 + 203 * 7 - 110, 585, "ComR");
        let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "ComR");
        this.Act = 1;
    }
    if(this.counter_1 == 30){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 32){
    	let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "TraL");
        let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "ComL");
        let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "TraL");
        let bubble5 = this.bubbles.create(270 + 203 * 7 - 110, 585, "ComR");
        let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "TraR");
        this.Act = 0;
    }
    if(this.counter_1 == 34){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 36){
       let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "ComL");
       let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "ComL");
       let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "ComL");
       let bubble3 = this.bubbles.create(270 + 203 * 4 + 80, 585, "TraR");
       let bubble4 = this.bubbles.create(270 + 203 * 6 - 110, 585, "TraR");
       let bubble5 = this.bubbles.create(270 + 203 * 7 - 110, 585, "TraR");
       let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "TraR");
       this.Act = 0;
    }
    if(this.counter_1 == 39){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 41){
       let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "ComL");
       let bubble1 = this.bubbles.create(270 + 203 * 1, 585, "ComL");
       let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "ComL");
       let bubble3 = this.bubbles.create(270 + 203 * 4 + 80, 585, "TraR");
       let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "ComR");
       this.Act = 1;
    }
    if(this.counter_1 == 43){
    	this.Act = -1;
    	this.bubbles.killAll();
    }
    if(this.counter_1 == 45){
       let bubble0 = this.bubbles.create(270 + 203 * 0, 585, "ComL");
       let bubble2 = this.bubbles.create(270 + 203 * 3 - 5, 585, "ComL");
       let bubble6 = this.bubbles.create(270 + 203 * 8 - 110, 585, "TraR");
       this.Act = 1;
    }
    if(this.counter_1 == 47){
    	if(this.correct_1 >= 8){
            preloadState.performance = 2;
        }
        else if(this.correct_1 < 8 && this.correct_1 > 5){
            preloadState.performance = 1;
        }
        else{
            preloadState.performance = 0;
        }
        preloadState.level_num = 1;
		game.sound.stopAll();
    	game.state.start("Trans");
    }    
}

// preloadState.level_num = 0;
// game.state.start("Trans");


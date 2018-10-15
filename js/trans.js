let transState = function(){
	counter = 0;
};

transState.prototype.create = function(){
	this.WBG = game.add.sprite(0, 0, "BlueW");
	this.BG = game.add.image(155.5, 137.5, "Transition1");
	
	
};

transState.prototype.update = function(){
	counter++;
	if(counter == 100){
		this.BG = game.add.image(155.5, 137.5, "Transition2")
	}
	if(counter == 140){
		this.BG = game.add.image(155.5, 137.5, "Transition3")
	}
	if(counter == 170){
		this.BG = game.add.image(155.5, 137.5, "Transition4")
	}
	if(counter == 190){
		this.BG = game.add.image(155.5, 137.5, "Transition5")
	}
	if(counter == 210){
		this.BG = game.add.image(155.5, 137.5, "Transition6")
	}
	if(counter == 230){
		this.BG = game.add.image(155.5, 137.5, "Transition7")
	}
	if(counter == 250){
		this.BG = game.add.image(155.5, 137.5, "Transition8")
	}
	if(counter == 270){
		this.BG = game.add.image(155.5, 137.5, "Transition9")
	}
	if(counter == 290){
		this.BG = game.add.image(155.5, 137.5, "Transition10")
	}
	if(counter == 310){
		this.BG = game.add.image(155.5, 137.5, "Transition11")
	}
	if(counter == 330){
		this.BG = game.add.image(155.5, 137.5, "Transition12")
	}
	if(counter == 350){
		this.BG = game.add.image(155.5, 137.5, "Transition11")
	}
	if(counter == 360){
		if(preloadState.level_num == -1){
			game.state.start("Game3");
			counter = 0;
		}
	}

};

function actionOnClick () {

    game.state.start("Game");

}
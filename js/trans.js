let transState = function(){
	counter = 0;
};

transState.prototype.create = function(){
	this.WBG = game.add.sprite(0, 0, "BlueW");
	// this.Text = game.add.text(155.5, 137.5, "GOOD", {fontSize: '320px', fill: '#000'});
	bmpText = game.add.bitmapText(550, 400, 'carrier_command','GOOD', 300);

	
	
};

transState.prototype.update = function(){
	counter++;
	if(counter == 150){
		this.BG = game.add.image(155.5, 137.5, "Transition1");
	}
	if(counter == 200){
		this.BG = game.add.image(155.5, 137.5, "Transition2")
	}
	if(counter == 240){
		this.BG = game.add.image(155.5, 137.5, "Transition3")
	}
	if(counter == 270){
		this.BG = game.add.image(155.5, 137.5, "Transition4")
	}
	if(counter == 290){
		this.BG = game.add.image(155.5, 137.5, "Transition5")
	}
	if(counter == 310){
		this.BG = game.add.image(155.5, 137.5, "Transition6")
	}
	if(counter == 330){
		this.BG = game.add.image(155.5, 137.5, "Transition7")
	}
	if(counter == 350){
		this.BG = game.add.image(155.5, 137.5, "Transition8")
	}
	if(counter == 370){
		this.BG = game.add.image(155.5, 137.5, "Transition9")
	}
	if(counter == 390){
		this.BG = game.add.image(155.5, 137.5, "Transition10")
	}
	if(counter == 410){
		this.BG = game.add.image(155.5, 137.5, "Transition11")
	}
	if(counter == 430){
		this.BG = game.add.image(155.5, 137.5, "Transition12")
	}
	if(counter == 450){
		this.BG = game.add.image(155.5, 137.5, "Transition11")
	}
	if(counter == 460){
		if(preloadState.level_num == -1){
			game.state.start("Game0");
			counter = 0;
		}
		if(preloadState.level_num == 0){
			game.state.start("Game1");
			counter = 0;
		}
		if(preloadState.level_num == 1){
			game.state.start("Game2");
			counter = 0;
		}
		if(preloadState.level_num == 2){
			game.state.start("Game3");
			counter = 0;
		}
	}

};

function actionOnClick () {

    game.state.start("Game");

}
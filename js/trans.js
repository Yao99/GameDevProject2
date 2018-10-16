let transState = function(){
	counter = 0;
};

transState.prototype.create = function(){
	this.offset = 0;
	this.WBG = game.add.sprite(0, 0, "BlueW");
	// this.Text = game.add.text(155.5, 137.5, "GOOD", {fontSize: '320px', fill: '#000'});
	if(preloadState.performance == 2){
		bmpText = game.add.bitmapText(550, 400, 'carrier_command','GOOD', 300);
	}
	if(preloadState.performance == 1){
		bmpText = game.add.bitmapText(900, 400, 'carrier_command','OK', 300);
	}
	if(preloadState.performance == 0){
		bmpText = game.add.bitmapText(750, 400, 'carrier_command','BAD', 300);
	}
	if(preloadState.performance == -1){
		this.offset = -149;
	}
	preloadState.performance = -2;
	
};

transState.prototype.update = function(){
	counter++;
	if(counter == this.offset+150){
		this.BG = game.add.image(155.5, 137.5, "Transition1");
	}
	if(counter == this.offset+200){
		this.BG = game.add.image(155.5, 137.5, "Transition2")
	}
	if(counter == this.offset+240){
		this.BG = game.add.image(155.5, 137.5, "Transition3")
	}
	if(counter == this.offset+270){
		this.BG = game.add.image(155.5, 137.5, "Transition4")
	}
	if(counter == this.offset+290){
		this.BG = game.add.image(155.5, 137.5, "Transition5")
	}
	if(counter == this.offset+310){
		this.BG = game.add.image(155.5, 137.5, "Transition6")
	}
	if(counter == this.offset+330){
		this.BG = game.add.image(155.5, 137.5, "Transition7")
	}
	if(counter == this.offset+350){
		this.BG = game.add.image(155.5, 137.5, "Transition8")
	}
	if(counter == this.offset+370){
		this.BG = game.add.image(155.5, 137.5, "Transition9")
	}
	if(counter == this.offset+390){
		this.BG = game.add.image(155.5, 137.5, "Transition10")
	}
	if(counter == this.offset+410){
		this.BG = game.add.image(155.5, 137.5, "Transition11")
	}
	if(counter == this.offset+430){
		this.BG = game.add.image(155.5, 137.5, "Transition12")
	}
	if(counter == this.offset+450){
		this.BG = game.add.image(155.5, 137.5, "Transition11")
	}
	if(counter == this.offset+460){
		if(preloadState.level_num == -1){
			this.offset = 0;
			game.state.start("Game0");
			counter = 0;
			
		}
		if(preloadState.level_num == 0){
			this.offset = 0;
			game.state.start("Game1");
			counter = 0;
			
		}
		if(preloadState.level_num == 1){
			this.offset = 0;
			game.state.start("Game2");
			counter = 0;
		}
		if(preloadState.level_num == 2){
			this.offset = 0;
			game.state.start("Game3");
			counter = 0;

		}
	}

};

function actionOnClick () {

    game.state.start("Game");

}
let game0State = function(){

};

game0State.prototype.create = function(){
	this.WBG = game.add.sprite(0, 0, "BlueW");
	this.BG = game.add.sprite(155.5, 137.5, "DuckBG");
	this.BG.animations.add("only", [0, 1], 8, true);
	this.BG.animations.play("only");

	this.player = game.add.sprite(155.5, 137.5, "Duck");
	this.player.animations.add("only", [0, 1], 10, true);
	this.player.animations.play("only");
	game.physics.enable(this.player, Phaser.Physics.ARCADE);
	this.player.body.collideWorldBounds = true;

	this.Teds = game.add.group();
	this.Teds.enableBody = true;
    //preloadState.level_num = 1;
    //this.scoreText = game.add.text(16, 16, "Test" + preloadState.level_num, {fontSize: '32px', fill: '#000'});
	game.time.events.repeat(Phaser.Timer.SECOND * 0.3, 1000, createTed, this);
    this.counter = 0;
    this.missed = 0;
    game.time.events.loop(Phaser.Timer.SECOND, checktime, this);
    this.scoreText = game.add.text(16, 16, "Missed: 0", {fontSize: '64px', fill: '#000'});
	
	DMMusic = game.add.audio("dmMusic");
	DMMusic.play();
};

game0State.prototype.update = function(){
	if (game.input.mousePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(this.player, 600);

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y))
        {
            this.player.body.velocity.setTo(0, 0);
        }
        if (this.player.x < 155.5)
        {
            this.player.x = 155.5;
        }
        if(this.player.x > 2125 - 300 + 155.5){
        	this.player.x = 2125 - 300  + 155.5;
        }
        if (this.player.y < 137.5)
        {
            this.player.y = 137.5;
        }
        if(this.player.y > 850 - 300 + 137.5){
        	this.player.y = 850 - 300  + 137.5;
        }
    }
    else
    {
        this.player.body.velocity.setTo(0, 0);
    }

    game.physics.arcade.overlap(this.player, this.Teds, this.onHit, null, this);
    this.Teds.forEach(checkifout, this, true);
    
};

function createTed(){
		var ok = false;
    	var y_temp = game.world.randomY;
    	var color_string;
    	while(y_temp < 137.5 || y_temp > 850 - 200 + 137.5){
    		y_temp = game.world.randomY;
    	}
    	ok = true;
    	if(ok){
    		var color = Math.floor(Math.random() * 2) + 1;
    		if( color == 1){
    			color_string = "BlueTed";
    		}
    		else{
    			color_string = "PinkTed";
    		}
    		let Ted = this.Teds.create(2125 - 100 + 155.5, y_temp, color_string);
    		Ted.body.velocity.setTo(- (Math.floor(Math.random() * 1000) + 1500), 0);
    		ok = false;
    		Ted.animations.add("only", [0, 1], 10, true);
			Ted.animations.play("only");
    	}    	
}

game0State.prototype.onHit = function(player, Ted){
    	Ted.body.velocity.setTo((Math.floor(Math.random() * 1000) + 2500), -2000);
    		Ted.angle += 100;
}

function checkifout(Ted){
    	if(Ted.x > 2125 + 155.5 || Ted.y < 135.5){
    		Ted.kill();
            
    	}
        if(Ted.x < 155.5){
            Ted.kill();
            this.missed++;
            this.scoreText.text = "Missed: " + this.missed;
        }
}
        

function checktime(){
    this.counter++;
    if(this.counter == 30){
        if(this.missed <= 9){
            preloadState.performance = 2;
        }
        else if(this.missed > 9 && this.missed < 20){
            preloadState.performance = 1;
        }
        else{
            preloadState.performance = 0;
        }
       
        preloadState.level_num = 0;
		game.sound.stopAll();
        game.state.start("Trans");
    }
}

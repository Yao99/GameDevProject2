let game3State = function(){

};

game3State.prototype.create = function(){
	
	game.stage.backgroundColor = '#182d3b';
	
	this.map = this.game.add.tilemap("WhaleMap");
	
	this.map.addTilesetImage("whale", "WhaleTiles");
	
	this.backgroundLayer = this.map.createLayer("backgroundLayer");
	this.blockedLayer = this.map.createLayer("blockedLayer");
	
	this.map.setCollisionBetween(1, 2000, true, "blockedLayer");
	
	this.backgroundLayer.resizeWorld();

	//create player
	this.player = game.add.sprite(1982, 1116, "golfball");
	
	game.physics.enable(this.player, Phaser.Physics.ARCADE);
	this.player.body.allowDrag = true;
	this.player.body.drag.x = 150;
	this.player.body.drag.y = 150;
	//this.player.body.angularDrag = 1;
	this.player.body.collideWorldBounds = true;
	
	//the camera will follow the player in the world
	this.game.camera.follow(this.player);
	
	//reference value for velocity setting
	var velocity = 0;
	//reference value for dist to cursor
	var dist = 0;
	
	//hp
	life = 10;
	
	Whaley = game.add.audio("whaley");
	
};

game3State.prototype.update = function(){
	
	game.input.onDown.add(this.mover, this);
	
	this.game.physics.arcade.collide(this.player, this.blockedLayer, this.failure);
	
	if(this.player.y < 192)
	{
		var graphics = game.add.graphics(0, 0);
		graphics.lineStyle(2, 0x0000FF, 1);
		graphics.beginFill(0x0000FF, 1);
		graphics.drawRect(0, 0, 2432, 1120);
		graphics.endFill();
		
		//victory animation
		this.BG = game.add.sprite(155.5, 137.5, "WhaleEnd");
		this.BG.animations.add("only", [0, 1], 3, true);
		this.BG.animations.play("only");
	}
	
};

game3State.prototype.mover = function(){
	
	dist = game.physics.arcade.distanceToPointer(this.player);
	
	velocity = dist/1.5;
	if(velocity>400){ velocity = 400 }
	else if(velocity<125){ velocity = 125 };
	
	game.physics.arcade.moveToPointer(this.player, velocity);
	//this.player.body.angularVelocity = 10;

	if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y)){ }
	else{
		
		dist = game.physics.arcade.distanceToPointer(this.player);
	
		velocity = dist/1.5;
		if(velocity>400){ velocity = 400 }
		else if(velocity<125){ velocity = 125 };
		
		game.physics.arcade.moveToPointer(this.player, velocity);
		//this.player.body.angularVelocity = 10;
		
	}
	
};

game3State.prototype.failure = function(){
	life -= 1;
	game.camera.flash(0xffffff, 200);
	game.camera.shake(0.001, 500);
	Whaley.play();
	
	if(life<1){
		
		game.state.start("Menu");
		
	}
};
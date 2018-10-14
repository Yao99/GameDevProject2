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
	this.player = game.add.sprite(500, 500, "golfball");
	
	game.physics.enable(this.player, Phaser.Physics.ARCADE);
	this.player.body.collideWorldBounds = true;
	
	//the camera will follow the player in the world
	this.game.camera.follow(this.player);
};

game3State.prototype.update = function(){
	
	game.input.onDown.add(move, this);

	function move() {
		// will only ever be called once, when the the input is down
		game.physics.arcade.moveToPointer(this.player, 400);
	}
	
	//Drag
	if(this.player.velocity>0){
		this.player.body.velocity -= 5;
	}
	else{
		this.player.body.velocity = 0;
	}
	
	//this.game.physics.arcade.collide(this.player, this.blockedLayer, this.failure);
	
};

game3State.prototype.failure = function(){
	
}
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
	this.player.body.collideWorldBounds = true;
	
	//the camera will follow the player in the world
	this.game.camera.follow(this.player);
};

game3State.prototype.update = function(){
	
	if (game.input.mousePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse
        game.physics.arcade.moveToPointer(this.player, 200);
		//this.player.body.angularVelocity = 10;

        //  if it's overlapping the mouse, don't move any more
        if (Phaser.Rectangle.contains(this.player.body, game.input.x, game.input.y))
        {
            this.player.body.velocity.setTo(0, 0);
        }
    }
    else
    {
        this.player.body.drag.x = 150;
		this.player.body.drag.y = 150;
		//this.player.body.angularDrag = 1;
    }
	
	this.game.physics.arcade.collide(this.player, this.blockedLayer, this.failure);
	
};

game3State.prototype.failure = function(){
	
}
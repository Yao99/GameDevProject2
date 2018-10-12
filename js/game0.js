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
};


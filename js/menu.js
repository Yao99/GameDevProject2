let menuState = function(){

};

menuState.prototype.create = function(){
	game.stage.backgroundColor = '#b2e2e9';
	preloadState.level_num = -1;
	preloadState.performance = -1;
	button0 = game.add.button(game.world.centerX - 192/2, 800, "button", actionOnClick3, this, 0, 3, 3);
	this.Title = game.add.sprite(game.world.centerX - 1956/2, game.world.centerY - 656/2 - 200, "Title");
	
};

menuState.prototype.update = function(){

};


function actionOnClick3 () {

    game.state.start("Trans");

}
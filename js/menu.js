let menuState = function(){

};

menuState.prototype.create = function(){
	game.stage.backgroundColor = '#182d3b';
	preloadState.level_num = -1;
	button0 = game.add.button(game.world.centerX - 355, 800, "button", actionOnClick1, this, 0, 3, 3);
	
};

menuState.prototype.update = function(){

};


function actionOnClick1 () {

    game.state.start("Game0");

}
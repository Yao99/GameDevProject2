let menuState = function(){

};

menuState.prototype.create = function(){
	game.stage.backgroundColor = '#182d3b';

	button = game.add.button(game.world.centerX - 95, 400, "button", actionOnClick, this, 0, 3, 3);
};

menuState.prototype.update = function(){

};

function actionOnClick () {

    game.state.start("Game");

}
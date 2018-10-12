let menuState = function(){

};

menuState.prototype.create = function(){
	game.stage.backgroundColor = '#182d3b';

	button0 = game.add.button(game.world.centerX - 355, 800, "button", actionOnClick, this, 0, 3, 3);
	button1 = game.add.button(game.world.centerX + 55, 800, "button", actionOnClick1, this, 1, 4, 4);
};

menuState.prototype.update = function(){

};

function actionOnClick () {

    game.state.start("Game");

}
function actionOnClick1 () {

    game.state.start("Option");

}
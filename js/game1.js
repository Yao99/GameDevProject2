let game1State = function(){

};

game1State.prototype.create = function(){
	game.stage.backgroundColor = '#182d3b';

	button0 = game.add.button(game.world.centerX - 95, 800, "button", actionOnClick, this, 0, 3, 3);
};

game1State.prototype.update = function(){

};

function actionOnClick () {

    game.state.start("Game");

}
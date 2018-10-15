let transState = function(){

};

transState.prototype.create = function(){
	this.WBG = game.add.sprite(0, 0, "BlueW");
	this.BG = game.add.image(155.5, 137.5, "Transition");
	
	
};

transState.prototype.update = function(){
};

function actionOnClick () {

    game.state.start("Game");

}
let game2State = function(){

};

game2State.prototype.create = function(){
	this.WBG = game.add.sprite(0, 0, "BlueW");
	this.BG = game.add.sprite(155.5, 137.5, "Zutho");
};

game2State.prototype.update = function(){

};

function actionOnClick () {

    game.state.start("Game");

}
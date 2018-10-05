// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
	game.load.image("sky", "assets/sky.png");
	game.load.image("platform", "assets/platform.png");
	game.load.image("star", "assets/star.png");
	game.load.spritesheet("button", "assets/button_sprite_sheet.png", 193, 71);
	game.load.spritesheet("murph", "assets/character.png", 32, 48);
};

preloadState.prototype.create = function(){
	game.state.start("Menu");
	
};

preloadState.prototype.update = function(){
	
};
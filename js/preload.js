// preloadState constructor

let preloadState = function(){

};

preloadState.prototype.preload = function(){
	level_num = 0;
	game.load.image("sky", "assets/sky.png");
	game.load.image("platform", "assets/platform.png");
	game.load.image("star", "assets/star.png");
	game.load.image("BlueW", "assets/blueWWbg.png");
	game.load.spritesheet("DuckBG", "assets/BGSpriteSheet2.png", 2125, 850);
	game.load.spritesheet("button", "assets/button_sprite_sheet_StartAgainExit.png", 192, 71);
	game.load.spritesheet("murph", "assets/character.png", 32, 48);
	game.load.spritesheet("Duck", "assets/duckmanCar_sheetpixeld.png", 300, 301);
	game.load.spritesheet("BlueTed", "assets/DMBlueTed_sheet.png", 100, 200);
	game.load.spritesheet("PinkTed", "assets/DMPinkTedsheet.png", 100, 200);
	game.load.image("Transition1", "assets/Transition PNGs/Ta1.png");
	game.load.image("Transition2", "assets/Transition PNGs/Ta2.png");
	game.load.image("Transition3", "assets/Transition PNGs/Ta3.png");
	game.load.image("Transition4", "assets/Transition PNGs/Ta4.png");
	game.load.image("Transition5", "assets/Transition PNGs/Ta5.png");
	game.load.image("Transition6", "assets/Transition PNGs/Ta6.png");
	game.load.image("Transition7", "assets/Transition PNGs/Ta7.png");
	game.load.image("Transition8", "assets/Transition PNGs/Ta8.png");
	game.load.image("Transition9", "assets/Transition PNGs/Ta9.png");
	game.load.image("Transition10", "assets/Transition PNGs/Ta10.png");
	game.load.image("Transition11", "assets/Transition PNGs/Ta11.png");
	game.load.image("Transition12", "assets/Transition PNGs/Ta12.png");
	
	//whale game
	game.load.tilemap("WhaleMap", "assets/whale.json", null, Phaser.Tilemap.TILED_JSON);
	game.load.image("WhaleTiles", "assets/placeholder whale.png");
	game.load.spritesheet("golfball", "assets/golfball.png");
	game.load.spritesheet("WhaleEnd", "assets/WhaleEnd.png", 2125, 850);
	game.load.audio("whaley", "assets/sounds/whaleshort.mp3");
};

preloadState.prototype.create = function(){
	game.state.start("Menu");
	
};

preloadState.prototype.update = function(){
	
};
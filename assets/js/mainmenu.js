/* global game, Phaser, playState, menuState, mainMenuState */

var startBtn;

var mainMenuState = {
    
    
    preload: function() { 
        game.load.spritesheet('starBtn','assets/images/start_btn.png', 193, 71);
        game.stage.backgroundColor = '#8185d5';
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        
    },
    
    
    create: function() {
        starbtn = game.add.button(game.world.centerX-95,200,'starBtn', this.startGame, this,2,1,0);
        
        var spaceKey = game.input.keyboard.addkey(Phaser.keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame,this);
        
    },
    
    
    update: function() {
        
    },

    startGame: function() {
       // game.state.start('play');
    }

};

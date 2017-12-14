//on video 5 
/* global game, Phaser, playState, menuState, mainMenuState */

var playState = {

    preload: function() { 
        // scale the game if it's on a device
        if(!game.device.desktop){ 
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
            game.scale.setMinMax(game.width/2, game.height/2, game.width, game.height);
        }
        game.scale.pageAlignHortizontally = true;
        game.scale.pageAlignVertically = true;
        
        game.stage.backgroundColor = '#8185d5';
        
        //perload pipes and banana
        game.load.image('bird', 'assests/images/banana.png');
        game.load.image('pipe', 'assests/images/pipe.png');
        
        // load the jump sound
        game.load.audio('jump','assests/audio/jump.m4a');
    },

    create: function() { 
        
    },

    update: function() {
        
    }
};

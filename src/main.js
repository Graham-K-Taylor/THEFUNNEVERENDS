// OK BOIS WE GOT WORK TO DO:
// Include ingame instructions
// Include 1-more animated characters using a texture atlas
// Simulate scrolling with a tilesprite
// Implement collision w/ arcade physics
// have looping bg moosic
// use like atleast 3 sfx
// use random to generate greater challenge as it continues.
// include a number to go up for player (score, time, etc.)
// Be endless
// Be playable for 15 seconds for Natha- I mean, for the average low skilled player
// dont crash/error
// include in-game credits for all roles, assets, music, etc.
// do something technically interesting
// do something with artistic flair





let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
      default: 'arcade',
      arcade: {
          //debug: true,
          gravity: {
              x: 0,
              y: 300
          }
      }
    },
    scene: [ Menu, Play ]
  }
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyDOWN, keyLEFT, keyRIGHT, SPACE, cursors;
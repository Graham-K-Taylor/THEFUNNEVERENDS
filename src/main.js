//Name: Graham Taylor
//Game Title: Mortem of a game
//Approx hours: 19
//creative tilt: I implemented a double jump in the physics engine for the technical portion, and i drew the 2 backgrounds for the creative portion, though I'm not the best artist nor did I spend nearly enough time on this.

// OK BOIS WE GOT WORK TO DO:
// Include ingame instructions DONE
// Include 1-more animated characters using a texture atlas
// Simulate scrolling with a tilesprite DONE
// Implement collision w/ arcade physics DONE
// have looping bg moosic
// use like atleast 3 sfx DONE
// use random to generate greater challenge as it continues. DONE
// include a number to go up for player (score, time, etc.) DONE
// Be endless DONE
// Be playable for 15 seconds for Natha- I mean, for the average low skilled player DONE
// dont crash/error DONE
// include in-game credits for all roles, assets, music, etc. DONE
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
    scene: [ Menu, Play, Credits, Explanation ]
  }
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyDOWN, keyLEFT, keyRIGHT, SPACE, cursors;
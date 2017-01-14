//noinspection JSUnresolvedFunction
import {
    Protagonist
} from './protagonist/Protagonist';
import {
    Scene
} from './Scene';
import {
    Level
} from './level/Level';
import {
    Keybindings
} from './Keybindings';
import {
    Powerups
} from './level/Powerups';
import {
    GUI
} from './GUI';
let $ = require('jquery');
let THREE = require('three');
let async = require('async');
let TWEEN = require('tween.js');
let Cookies = require('js-cookie');


//because some three js modules need a global THREE-letiable....
window.THREE = THREE;

let mainScene;
let level = [{},
    new Level(1),
    new Level(2),
    new Level(3),
    new Level(4),
    new Level(5)
];
let currentLevel = 1;
let URLpath = '';
window.initMe = 0;

let music = new Audio('/sound/music.mp3');

if (isMusicOn()) music.play();
else GUI.uncheckSoundSwitch();

/**
 * game with intro
 */
function gameWithIntro() {

    async.series([
        function setup(next) {
            GUI.startingAnimationFadeIn();
            mainScene.showIntro();
            render();
            addLevel();
            next();
        },
        function waitForAnyKeyPress(next) {
            Keybindings.keyBind('keydown', mainScene, function() {
                Keybindings.unbind('keydown');
                next();
            });
        },
        function startingAnimation(next) {
            let fadeTime = 1000;
            GUI.startingAnimationFadeOut(fadeTime);
            setTimeout(function() {
                mainScene.startingAnimation().then(() => {
                    next();
                });
            }, fadeTime);
        },
        function startGame(next) {
            startLevel().then(()=>{
              next();
            });
        },
        function showLevelScreen(next) {
            showScreen();
        }
    ]);
}



/**
 * game begins directly
 */
function _gameWithoutIntro() {
  // TODO preload everything
    mainScene.simpleIntro();
    render();
    addLevel();
    startLevel().then(()=>{
      showScreen();
    });
}

/**
 * renders game
 */
function render() {
    requestAnimationFrame(render);
    mainScene.render();
    mainScene.turn(level[currentLevel]);
    TWEEN.update();
}

/**
 * adds current level to scene
 */
function addLevel() {
    level[currentLevel].prepare();
    mainScene.addLevel(level[currentLevel]);
}

/**
 * starts current level
 * @param {Function} cb - callback function called when level is done
 */
function startLevel() {
    GUI.fadeInScoreboard();
    GUI.fadeInSoundSwitch();
    console.log(typeof Keybindings.keyBind);
    Keybindings.keyBind('keydown', mainScene, Scene.startMovingProtagonist);
    Keybindings.keyBind('keyup', mainScene, Scene.stopMovingProtagonist);
    //start moving way
    mainScene.move.continue = true;
    return new Promise((resolve, reject)=>{
      level[currentLevel].begin(mainScene.getProtagonist()).then(() => {
          //level done
          mainScene.move.continue = false;
          Keybindings.unbind('keydown');
          Keybindings.unbind('keyup');
          resolve();
      });
    });

}

/**
 * shows gameover or successcreen at the end of the level and updates Cookies
 */
function showScreen() {
    if (!level[currentLevel].gameOver) {
        //success
        level[currentLevel].setCookie(true);
        level[currentLevel].showSuccessScreen();
    } else {
        //gameover
        level[currentLevel].setCookie(false);
        level[currentLevel].showGameOverScreen();
    }
}

/**
 * checks whether level is allowed to be played, if yes return true
 * @param {number} level
 * @returns {boolean}
 */
function _playThisLevel() {
    if (currentLevel === 1) return true;
    return Level.canBePlayed(currentLevel);
}

/**
 * checks in cookies whether sound is on
 * @returns {boolean} - true if sound is on
 */
function isMusicOn() {
    if (Cookies.get('sound') === "on") return true;
    if (Cookies.get('sound')) {
        level[currentLevel].playSound = false;
        return false;
    }
    _setMusicSettings(true);
    return true;

}

/**
 * sets music settings in Cookies
 */
function _setMusicSettings(isOn) {
    if (isOn) Cookies.set('sound', 'on');
    else Cookies.set('sound', 'off');
}

/**
 * main function for /game
 */
let _main = function() {
    let URL = window.location.href;
    URLpath = URL.replace(/http:\/\/.+\//g, '');
    if (URLpath !== "") currentLevel = URLpath.replace('#', '');
    GUI.showLoadingIcon();
    Protagonist.init().then(() => {
        let background = level[currentLevel].background();
        mainScene = new Scene(window.innerWidth, window.innerHeight, background);
        document.body.appendChild(mainScene.renderer.domElement);
        GUI.removeLoadingIcon();
        if (URLpath == "") {
            gameWithIntro();
        } else {
            if (_playThisLevel()) {
                _gameWithoutIntro();
            } else {
                let newURL = URL.replace(URLpath, '');
                window.location.href = newURL;
            }
        }
    });
};

/**
 * main function of /
 */
let _intro = function() {
    GUI.introFadeIn();
};

//reloads page
$(document).on('click', '.button.reload', function() {
    location.reload();
});

//buys powerup on click
$(document).on('click', '.powerup .button', function(event) {
    if (GUI.buttonIsEnabled($(this))) {
        let powerup = GUI.getPowerupIdFromButton(event);
        console.dir(Powerups);
        let total = Powerups.buy(powerup);
        level[currentLevel].updateShopScreen();
        if (Level.canBePlayed(parseInt(currentLevel) + 1)) GUI.updateNextLevelButton();
    }
});

//enables and disables sound
$(document).on('click', '#soundSwitch', function(event) {
    level[currentLevel].playSound = GUI.getSoundSwitch();
    _setMusicSettings(level[currentLevel].playSound);
    if (level[currentLevel].playSound) music.play();
    else music.pause();
});

//resets cookies to play game from start
$(document).on('click', '#playagain', function(event) {
    let object = Cookies.get();
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            Cookies.remove(property);
        }
    }
});

music.addEventListener('ended', function() {
    if (level[currentLevel].playSound) {
        this.currentTime = 0;
        this.play();
    }
}, false);

//store functions to window
window.intro = _intro;
window.main = _main;

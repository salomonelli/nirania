import * as Level from './level/level';
import * as Protagonist from './protagonist/protagonist';
import * as Scene from './Scene';
class Play {

    constructor(level, scene) {
        this.level = level;
        this.scene = scene;
        this.diamonds = 0;
    }

    start() {

        // this.running = true;
        this.scene.setupLevel(this.level);
        this.level.begin(Protagonist.get());

        // key-handlers
        // this.subs.push(Keybindings.keyBind('keydown').subscribe(direction => scene.startMovingProtagonist(direction)));
        // this.subs.push(Keybindings.keyBind('keyup').subscribe(direction => scene.stopMovingProtagonist(direction)));
        // return observable
    }

    renderToDomElement(domElement) {
        this.scene.renderToDomElement(domElement);
    }

    listenKeys(to = true) {

    }
}


export function byLevelId(levelId) {
    const level = Level.getById(levelId);
    // TODO get width and height from domelement
    const scene = Scene.create(window.innerWidth, window.innerHeight, level);
    return new Play(level, scene);
}

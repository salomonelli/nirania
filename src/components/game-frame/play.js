import * as Level from './level/level';
import * as Erich from './erich/erich';
import * as Scene from './Scene';
class Play {

    constructor(level, scene, erich) {
        this.level = level;
        this.scene = scene;
        this.diamonds = 0;
        this.erich = erich;
    }

    start() {

        // this.running = true;
        this.scene.setupLevel(this.level);
        this.level.begin(this.erich);

        // key-handlers
        // this.subs.push(Keybindings.keyBind('keydown').subscribe(direction => scene.startMovingErich(direction)));
        // this.subs.push(Keybindings.keyBind('keyup').subscribe(direction => scene.stopMovingErich(direction)));
        // return observable
    }

    renderToDomElement(domElement) {
        this.scene.renderToDomElement(domElement);
    }

    listenKeys(to = true) {

    }
}


export function byLevelId(levelId) {
    const erich = Erich.create();
    const level = Level.getById(levelId, erich);
    // TODO get width and height from domelement
    const scene = Scene.create(window.innerWidth, window.innerHeight, level);
    return new Play(level, scene, erich);
}

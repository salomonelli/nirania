import {
    BehaviorSubject
} from 'rxjs/Rx';

import * as Level from './level/level';
import * as Erich from './erich/erich';
import * as Scene from './Scene';
import * as Util from './util';

class Play {

    constructor(level, scene, erich) {
        this.level = level;
        this.scene = scene;
        this.erich = erich;
        this.playStatus$ = new BehaviorSubject({
            diamonds: 0,
            complete: false,
            success: null
        });
    }

    start() {
        this.loopAnimation();
        this.loopStatus();
        // key-handlers
        // this.subs.push(Keybindings.keyBind('keydown').subscribe(direction => scene.startMovingErich(direction)));
        // this.subs.push(Keybindings.keyBind('keyup').subscribe(direction => scene.stopMovingErich(direction)));
        // return observable
        return this.playStatus$;
    }

    async requestAnimationFramePromise() {
        return new Promise(res => requestAnimationFrame(() => res()));
    }

    async loopAnimation() {
        while (!this.playStatus$.getValue().completed) {
            await this.requestAnimationFramePromise();
            this.scene.render();
            this.scene.turn();
            // TWEEN.update();
            // TODO duschen!!
        }
    }

    async loopStatus() {
        const speed = 2;
        while (
            this.scene.way.move(speed) > 0 &&
            !this.playStatus$.getValue().completed
            // !this.checkCollision(this.erich)
        ) {
            this.erich.animateMovement();
            await new Promise(res => setTimeout(res, this.speed));
        }
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

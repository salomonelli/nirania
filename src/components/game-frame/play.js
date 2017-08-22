import {
    BehaviorSubject
} from 'rxjs/Rx';

import * as Level from './level/level';
import * as Erich from './erich/erich';
import * as Scene from './Scene';
import * as Util from './util';
import * as TWEEN from 'tween.js';
import * as CollisionDetector from './collision-detector';
import {
    getActionByKey
} from './keybindings';

class Play {

    constructor(level, scene, erich) {
        this.level = level;
        this.scene = scene;
        this.erich = erich;
        this.playStatus$ = new BehaviorSubject({
            diamonds: 0,
            complete: false,
            survived: false,
            success: null
        });
        this.collisionDetector = CollisionDetector.create(this.scene.way.obstacles);
    }

    start() {
        this.loopAnimation();
        this.loopStatus();
        return this.playStatus$;
    }

    async requestAnimationFramePromise() {
        return new Promise(res => requestAnimationFrame(() => res()));
    }

    async loopAnimation() {
        while (!this.playStatus$.getValue().complete) {
            await this.requestAnimationFramePromise();
            this.scene.render();
            TWEEN.update();
        }
    }

    async loopStatus() {
        this.scene.startAction('continue');
        const speed = 1;
        while (
            this.scene.way.move(speed) > 0 &&
            !this.playStatus$.getValue().complete
        ) {
            this.checkCollision();
            this.erich.animateMovement();
            this.scene.animateMovement();
            await new Promise(res => setTimeout(res, this.speed));
        }
        this.scene.endAction('continue');
        if(
          !this.playStatus$.getValue().complete
        ) {
            const currentValue = this.playStatus$.getValue();
            currentValue.survived = true;
            currentValue.success = this.isSuccess(true, currentValue.diamonds);
            currentValue.complete = true;
            this.playStatus$.next(currentValue);
        }
    }

    isSuccess(complete, diamonds) {
        if(
            complete &&
            diamonds >= this.level.currentLevel.requiredDiamonds
        ) return true;
        return false;
    }

    renderToDomElement(domElement) {
        this.scene.renderToDomElement(domElement);
    }

    checkCollision() {
        const collisionObj = this.collisionDetector.collision(this.scene.way.currentPosition);
        if(!collisionObj.collision) return;
        const currentValue = this.playStatus$.getValue();
        switch (collisionObj.type) {
            case 'diamond':
                currentValue.diamonds++;
                this.scene.hideFromScene(collisionObj.mesh);
                this.playStatus$.next(currentValue);
                break;
            default:
                currentValue.complete = true;
                currentValue.success = false;
                currentValue.survived = false;
                this.playStatus$.next(currentValue);
                return collisionObj.collision;
        }
    }

    getActionByKey(code, twoPlayers = false, leftPlayer = null) {
        return getActionByKey(code, twoPlayers, leftPlayer);
    }

    startAction(action) {
        this.scene.startAction(action);
    }

    endAction(action) {
        this.scene.endAction(action);
    }
}


export function byLevelId(levelId) {
    const erich = Erich.create();
    const level = Level.getById(levelId, erich);
    // TODO get width and height from domelement
    const scene = Scene.create(window.innerWidth, window.innerHeight, level);
    return new Play(level, scene, erich);
}

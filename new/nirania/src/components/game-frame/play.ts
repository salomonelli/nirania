import {
    BehaviorSubject,
    filter,
    first,
    Subject
} from 'rxjs';

import * as Level from './level/level';
import * as Erich from './erich/erich';
import * as Scene from './Scene';
import * as TWEEN from 'tween.js';
import * as CollisionDetector from './collision-detector';
import {
    getActionByKey
} from './keybindings';

export class Play {
    playStatus$: BehaviorSubject<any>;
    actions$: Subject<unknown>;
    collisionDetector: any;
    constructor(
        public level: any,
        public scene: any,
        public erich: any
    ) {
        this.playStatus$ = new BehaviorSubject({
            diamonds: 0,
            complete: false,
            survived: false,
            success: null,
            pause: false,
            position: this.level.way.length,
            explanation: null
        });
        this.actions$ = new Subject();
        this.collisionDetector = CollisionDetector.create(this.scene.way.obstacles);
    }


    getState() {
        return this.playStatus$.getValue();
    }

    setState(newState: any) {
        const oldState = this.playStatus$.getValue();
        Object.keys(newState).forEach(k => oldState[k] = newState[k]);
        this.playStatus$.next(oldState);
    }

    start() {
        this.level.behavior.start && this.level.behavior.start(this);
        this.loopAnimation();
        new Promise(res => setTimeout(res, 1000))
            .then(() => this.loopStatus());
        return this.playStatus$;
    }

    async requestAnimationFramePromise() {
        return new Promise<void>(res => requestAnimationFrame(() => res()));
    }

    async loopAnimation() {
        while (!this.playStatus$.getValue().complete) {
            if (this.playStatus$.getValue().pause) {
                await this.playStatus$.pipe(
                    filter(data => !data.pause),
                    first()
                ).toPromise();
            }
            await this.requestAnimationFramePromise();
            this.scene.render();
            TWEEN.update();
        }
    }

    async loopStatus() {
        const factor = 1;
        this.scene.startAction('continue');
        const speed = 3 * factor;
        let position = this.level.way.length;
        const move = () => {
            position = this.scene.way.move(speed, this.erich, this.scene);
            this.setState({ position });
            return position;
        };
        while (
            move() > 0 &&
            !this.playStatus$.getValue().complete
        ) {
            if (this.playStatus$.getValue().pause) {
                await this.playStatus$.pipe(
                    filter(data => !data.pause),
                    first()
                ).toPromise();
            }
            this.checkCollision();
            this.scene.animateMovement();
            await new Promise(res => setTimeout(res, 10 * factor));
        }
        this.scene.endAction('continue');
        if (
            !this.playStatus$.getValue().complete
        ) {
            this.setState({
                survived: true,
                success: this.isSuccess(true, this.getState().diamonds),
                complete: true
            });
        }
        this.level.behavior.end && this.level.behavior.end(this);
    }

    isSuccess(complete: any, diamonds: any) {
        if (
            complete &&
            diamonds >= this.level.currentLevel.requiredDiamonds
        ) return true;
        return false;
    }

    renderToDomElement(domElement: HTMLDivElement) {
        domElement.innerHTML = '';
        this.scene.renderToDomElement(domElement);
    }

    checkCollision() {

        const collisionObj = this.collisionDetector.collision(this.scene.way.currentPosition);
        if (!collisionObj.collision) return;
        switch (collisionObj.type) {
            case 'diamond':
                const diamonds = this.getState().diamonds + 1;
                this.scene.hideFromScene(collisionObj.mesh);
                this.setState({ diamonds });
                break;
            default:
                this.setState({
                    complete: true,
                    success: false,
                    survived: false
                });
                return collisionObj.collision;
        }
    }

    getActionByKey(code: any, twoPlayers = false, leftPlayer = null) {
        return getActionByKey(code, twoPlayers, leftPlayer);
    }

    startAction(action: any, once = false) {
        switch (action) {
            case 'pause':
                this.setState({ pause: !this.getState().pause });
                break;
            default:
                this.scene.startAction(action, once);
                break;
        }
        this.actions$.next(action);
    }

    endAction(action: any) {
        this.scene.endAction(action);
    }

    displayExplanation(text: string, iconType: any) {
        this.setState({ explanation: text, icon: iconType });
    }

    hideExplanation() {
        this.setState({ explanation: null, icon: null });
    }
}


export function byLevelId(levelId: any) {
    const erich = Erich.create();
    const level = Level.getById(levelId, erich);
    // TODO get width and height from domelement
    const scene = Scene.create(window.innerWidth, window.innerHeight, level);
    return new Play(level, scene, erich);
}

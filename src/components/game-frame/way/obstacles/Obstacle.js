import Box from './Box';
import Cone from './Cone';
import Diamond from './Diamond';
import Ring from './Ring';
import * as Util from '../../util';

const _obstacleTypes = {
    box: Box,
    ring: Ring,
    diamond: Diamond,
    cone: Cone
};

export default class Obstacle {
    /**
     * Represents an Obstacle on wthe way
     * @param {String} type - string like 'cube'
     * @param {THREE.Mesh} mesh - mesh of obstacle
     * @param {number} distance - from starting point of way up to obstacle
     * @param {number} angle - in radiant, on which side the obstacle is positioned
     * @constructor
     */
    constructor(type, mesh, distance, angle, collisionData) {
        this.type = type;
        this.mesh = mesh;
        this.distance = distance;
        this.angle = angle;
        this.collisionData = collisionData;
        this.randomMoving = false;

        //used if moving obstacle
        if (type === 'cone') {
            this.randomMoving = true;
            this.directionChangeIndex = 0;
            this.direction = true; //true == 'right', false == 'left'
        }
    }

    move(direction) {
        if (direction) this.angle += 1;
        else this.angle -= 1;

        this.angle = Util.normalizeAngle(this.angle);

        let radius = 80 + 15;
        let angle = -(this.angle - 90);
        angle = Util.convertDegreesToRadians(angle);
        let x = radius * Math.cos(angle);
        let z = -(radius * Math.sin(angle));
        this.mesh.rotation.y = angle;
        this.mesh.position.x = x;
        this.mesh.position.z = z;

        //neue angle ist this.angle
        let a = radius - 0.5 * 30;
        let b = 30 * 0.5;
        let angleRight = Util.convertRadiansToDegrees(Math.atan(b / a));
        this.collisionData.angle.center = this.angle;
        this.collisionData.angle.min = Util.normalizeAngle(this.angle - angleRight);
        this.collisionData.angle.max = Util.normalizeAngle(this.angle + angleRight);
    }
};

/**
 * creates from array obstacles and returns them
 * @param {Array} obstacles - contains information to generate obstacles
 * @returns {Array} ret - containing obstacle objects
 */
export function generateFromArray(obstacles, wayLength, radius) {
    const ret = obstacles.map(o => {
        const obstacle = new _obstacleTypes[o.type](o);
        obstacle.position(o.position.angle, o.position.distance, wayLength, radius);
        const collisionData = _obstacleTypes[o.type].prepareForCollisionDetection(o, radius);
        return new Obstacle(
            o.type,
            obstacle.mesh,
            o.position.distance,
            o.position.angle,
            collisionData
        );
    });
    return ret;
};

export function create(type, mesh, distance, angle, collisionData) {
    return new Obstacle(type, mesh, distance, angle, collisionData);
}

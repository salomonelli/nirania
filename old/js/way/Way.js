import {
    Color
} from '../Color';
import * as Util from '../Util';
import * as GUI from '../GUI';
let THREE = require('three');
let Obstacle = require('./obstacles/Obstacle');
let randomBoolean = require('random-boolean');

class Way {
    /**
     * Represents way
     * @param {number} length how long the way is
     * @param {number} speed how fast the way should move
     * @constructor
     */
    constructor(length, speed, color) {
        this.length = length;
        this.speed = speed;
        this.group = new THREE.Object3D();
        this.obstacles = [];
        this.radius = 80;
        this.segments = 1000;
        this.geometry = new THREE.CylinderGeometry(this.radius, this.radius, this.length, this.segments);
        this.material = new THREE.MeshLambertMaterial({
            color: color
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
        this.group.add(this.mesh);
        this.currentPosition = {
            angle: 0,
            anglemin: -5,
            anglemax: 5,
            distance: 50,
            height: 0
        };
    }

    /**
     * positions way properly into the scene
     * @param {number} y y position
     * @param {number} z z position
     */
    position() {
        this.group.rotation.x = Math.PI / 2;
        this.group.position.y = -this.radius - 18;
        this.group.position.z = -this.length * 0.5 + 50;
    };

    /**
     * moves way direction z positive
     * @param {number} speed
     */
    moveForwardTillEnd(speed) {
        this.group.position.z = this.group.position.z + speed;
        this.currentPosition.distance = this.currentPosition.distance + speed;
        this.moveRandomObstacles();
        GUI.updateDistance(this.currentPosition.distance);
    };

    /**
     * sets current position
     */
    setCurrentPosition() {
        // anglemin and anglemax are hitbox for protagonist
        this.currentPosition.anglemin = this.currentPosition.angle - 5;
        if (this.currentPosition.anglemin < 0) this.currentPosition.anglemin = this.currentPosition.anglemin + 360;
        if (this.currentPosition.anglemax > 360) this.currentPosition.anglemax = this.currentPosition.anglemax - 360;
        this.currentPosition.anglemax = this.currentPosition.angle + 5;
    };

    /**
     * rotates the way around the y axis according to given angle
     * @param {number} angle
     */
    rotate(angle) {
        if (Util.convertRadiansToDegrees(this.group.rotation.y) >= 360) this.group.rotation.y = 0;
        if (Util.convertRadiansToDegrees(this.group.rotation.y) < 0) this.group.rotation.y = Util.convertDegreesToRadians(360);

        this.group.rotation.y += angle;
        this.currentPosition.angle = Util.convertRadiansToDegrees(this.group.rotation.y);

        this.setCurrentPosition();
    };

    /**
     * moves the random obstacles
     */
    moveRandomObstacles() {
        this.obstacles.forEach(function(obstacle) {
            if (!obstacle.randomMoving) return;
            obstacle.directionChangeIndex++;
            if (obstacle.directionChangeIndex == 15) {
                obstacle.directionChangeIndex = 0;
                obstacle.direction = randomBoolean();
            }
            //move it
            obstacle.move(obstacle.direction);
        });
    };

    /**
     * creates Obstacles out of array and adds them to the way
     * @param {[{}]} obstacles
     */
    addObstacles(obstacles) {
        let self = this;
        self.obstacles = Obstacle.generateFromArray(obstacles, self.length, self.radius);
        self.obstacles.forEach(function(obstacle) {
            if (obstacle.distance < self.length) self.group.add(obstacle.mesh);
            else console.log('Way.prototype.addObstacles(): ATTENTION!! Obstacle was not added. Distance of Obstacles is greater than the length of the way.');
        });
    };

    /**
     * adds way to given scene
     * @param {THREE.Scene} scene - scene to which the way will be added
     */
    addToScene(scene) {
        scene.add(this.group);
    };
}

export function create(length, speed, color) {
    return new Way(length, speed, color);
}

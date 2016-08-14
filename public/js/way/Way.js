module.exports = (function (THREE, COLOR) {
    /**
     * Represents way
     * @param {number} length how long the way is
     * @param {number} speed how fast the way should move
     * @constructor
     */
    function Way(length, speed) {
        this.length = length;
        this.speed = speed;

        //create an empty container
        this.group = new THREE.Object3D();

        //add way
        this.geometry = new THREE.CylinderGeometry(100, 100, 1000, this.length);
        this.material = new THREE.MeshLambertMaterial({color: COLOR.way});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.group.add(this.mesh);
    }

    /**
     * positions way properly into the scene
     * @param {number} y y position
     * @param {number} z z position
     */
    Way.prototype.position = function(y,z){
        this.group.rotation.x = Math.PI / 2;
        this.group.position.y = y;
        this.group.position.z = z;
    };

    /**
     * moves way direction z positive according to speed
     * @param {function} cb callback function
     */
    Way.prototype.moveForwardTillEnd = function (cb) {
        var self = this;
        var t = self.length - 80;
        var animate = function () {
            self.group.position.z++;
            t--;
            if (t > 0) {
                setTimeout(function () {
                    animate();
                }, self.speed);
            } else {
                cb();
            }
        };
        animate();
    };

    /**
     * rotates the way around the y axis according to given angle
     * @param {number} angle
     */
    Way.prototype.rotate = function (angle) {
        this.group.rotation.y += angle;
    };

    /**
     * creates Obstacles out of array and adds them to the way
     * @param {[{}]} obstacles
     */
    Way.prototype.addObstacles = function (obstacles) {
        var obstacle = new THREE.Mesh(
            new THREE.CubeGeometry(25, 25, 25),
            new THREE.MeshBasicMaterial()
        );
        obstacle.position.set(0,100,-100);
        var obstacle2 = new THREE.Mesh(
            new THREE.CubeGeometry(25, 25, 25),
            new THREE.MeshBasicMaterial({color: 0x000000})
        );
        var position = Way.calcCirlce(Math.PI*0.02);
        obstacle2.position.set(100,-400,0);//0,position.x,position.z);
        console.dir(obstacle2.position);
        this.group.add(obstacle);
        this.group.add(obstacle2);
    };

    Way.calcCirlce = function(angle){
        var h = 0;
        var k = 0;
        var radius = 100;
        var z = radius * Math.cos(angle) + h;
        var x = radius * Math.sin(angle) + k;
        return {
            z: z,
            x: x
        };
    };

    return Way;
})(
    require('three'),
    require('../COLOR')
);
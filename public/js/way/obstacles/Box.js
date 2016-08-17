module.exports=(function(THREE, UTIL){

    /**
     * Represents the obstacle "Box"
     * @param {Object} box - structure as in levelX.js
     * @constructor
     */
    function Box(box){
        this.material = new THREE.MeshLambertMaterial({color: box.color});
        this.geometry = new THREE.BoxGeometry(box.size.height, box.size.length, box.size.width);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    /**
     * Positions the box on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    Box.prototype.position = function(angle, distance, length, radius){
        angle = -(angle -90);
        angle = UTIL.convertDegreesToRadians(angle);
        var y = (length / 2) - distance;
        var x = radius * Math.cos(angle);
        var z = -(radius * Math.sin(angle));
        this.mesh.rotation.y += angle;
        this.mesh.position.set(x,y,z);
    };

    /**
     * converts box object from levelX.js into a format that can be used for detecting collisions
     * @param {Object} obstacle - with structure as in levelX.js
     * @param radius - radius of way
     * @returns {Object} ret - object ret that is fitted for detecting collisions
     */
    Box.prepareForCollisionDetection = function(obstacle, radius){
        var a = radius - 0.5* obstacle.size.height;
        var b = obstacle.size.width*0.5;
        var angleRight = Math.atan(b/a);
        var ret = {
            type: 'box',
            size: obstacle.size,
            angle: {
                center: obstacle.position.angle,
                min: obstacle.position.angle - UTIL.convertRadiansToDegrees(angleRight),
                max: obstacle.position.angle + UTIL.convertRadiansToDegrees(angleRight)
            },
            distance: {
                center: obstacle.position.distance,
                min: obstacle.position.distance - (0.5*obstacle.size.length),
                max: obstacle.position.distance + (0.5*obstacle.size.length)
            }
        };
        return ret;
    };

    return Box;
})(
    require('three'),
    require('../../UTIL')
);
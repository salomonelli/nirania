module.exports = (function(THREE, UTIL){
    var size = 10;
    var heightFromWay = 20;

    /**
     * Represents the "obstacle" "diamond" (that can be collected)
     * @param {Object} diamond - structure as in levelX.js
     * @constructor
     */
    function Diamond(diamond){
        this.geometry = new THREE.OctahedronGeometry(size, 0);
        this.material = new THREE.MeshLambertMaterial({color: diamond.color});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    /**
     * Positions the diamond on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    Diamond.prototype.position = function(angle, distance, length, radius){
        angle = -(angle -90);
        angle = UTIL.convertDegreesToRadians(angle);
        radius += heightFromWay;
        var y = (length / 2) - distance;
        var x = radius * Math.cos(angle);
        var z = -(radius * Math.sin(angle));
        this.mesh.rotation.y += angle;
        this.mesh.position.set(x,y,z);
    };

    /**
     * converts diamond object from levelX.js into a format that can be used for detecting collisions
     * @param {Object} obstacle - with structure as in levelX.js
     * @param radius - radius of way
     * @returns {Object} ret - object ret that is fitted for detecting collisions
     */
    Diamond.prepareForCollisionDetection =function(obstacle, radius){
        var a = radius + heightFromWay - 0.5* size;
        var b = size*0.5;
        var angleRight = Math.atan(b/a);
        var ret = {
            size: obstacle.size,
            angle: {
                center: obstacle.position.angle,
                min: obstacle.position.angle - angleRight,
                max: obstacle.position.angle + angleRight
            },
            distance: {
                center: obstacle.position.distance,
                min: obstacle.position.distance - (0.5*size),
                max: obstacle.position.distance + (0.5*size)
            }
        };
        return ret;
    };

    return Diamond;
})(
    require('three'),
    require('../../UTIL')
);
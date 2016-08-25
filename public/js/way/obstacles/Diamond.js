module.exports = (function(THREE, UTIL, Cookies) {
    var _size = 10;
    var _heightFromWay = 20;

    /**
     * Represents the "obstacle" "diamond" (that can be collected)
     * @param {Object} diamond - structure as in levelX.js
     * @constructor
     */
    function Diamond(diamond) {
        this.geometry = new THREE.OctahedronGeometry(_size, 0);
        this.material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.6
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.castShadow = true;
    }

    /**
     * Positions the diamond on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    Diamond.prototype.position = function(angle, distance, length, radius) {
        angle = -(angle - 90);
        angle = UTIL.convertDegreesToRadians(angle);
        radius += _heightFromWay;
        var y = (length / 2) - distance;
        var x = radius * Math.cos(angle);
        var z = -(radius * Math.sin(angle));
        this.mesh.rotation.y += angle;
        this.mesh.position.set(x, y, z);
    };

    /**
     * converts diamond object from levelX.js into a format that can be used for detecting collisions
     * @param {Object} obstacle - with structure as in levelX.js
     * @param radius - radius of way
     * @returns {Object} ret - object ret that is fitted for detecting collisions
     */
    Diamond.prepareForCollisionDetection = function(obstacle, radius) {
        var angle = 10;
        if (Cookies.get('powerup-3') == "bought") angle = 35;
        return {
            type: 'diamond',
            size: {
                height: _heightFromWay
            },
            angle: {
                center: obstacle.position.angle,
                min: obstacle.position.angle - angle,
                max: obstacle.position.angle + angle
            },
            distance: {
                center: obstacle.position.distance,
                min: obstacle.position.distance - 10,
                max: obstacle.position.distance + 10
            }

        };
    };

    return Diamond;
})(
    require('three'),
    require('../../UTIL'),
    require('js-cookie')
);

module.exports = (function () {
    //radius of all rings (has to be larger than radius of way!)
    var radius = 100;

    /**
     * Represents the obstacle "Ring"
     * @param {Object} ring - structure as in levelX.js
     * @constructor
     */
    function Ring(ring) {
        this.material = new THREE.MeshLambertMaterial({color: ring.color});
        this.geometry = new THREE.TorusGeometry(radius, 3, 16, 100);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    /**
     * Positions the Ring on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    Ring.prototype.position = function (angle, distance, length, radius) {
        this.mesh.rotation.x += Math.PI / 2;
        this.mesh.position.y = (length / 2) - distance;
    };

    /**
     * converts ring object from levelX.js into a format that can be used for detecting collisions
     * @param {Object} obstacle - with structure as in levelX.js
     * @param radius - radius of way
     * @returns {Object} ret - object ret that is fitted for detecting collisions
     */
    Ring.prepareForCollisionDetection = function (obstacle, radius) {
        return {
            type: 'ring',
            size: {
                height: radius - 80
            },
            angle: {
                center: 0,
                min: 0,
                max: 360
            },
            distance: obstacle.position.distance,
        };
    };

    return Ring;
})();
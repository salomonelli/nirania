module.exports = (function(THREE, UTIL) {
    var _height = 30;
    var _radius = 15;

    /**
     * Represenst cone that moves randomly around the way
     */
    function Cone(cone) {
        this.material = new THREE.MeshLambertMaterial({color: cone.color});
        this.geometry = new THREE.ConeGeometry(_radius, _height, 100, 100);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
    }

    /**
     * positions cone on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    Cone.prototype.position = function(angle, distance, length, radius){
        radius += _height*0.5;
        this.mesh.rotation.z -= Math.PI/2;
        angle = -(angle -90);
        angle = UTIL.convertDegreesToRadians(angle);
        var y = (length / 2) - distance;
        var x = radius * Math.cos(angle);
        var z = -(radius * Math.sin(angle));
        this.mesh.rotation.y += angle;
        this.mesh.position.set(x,y,z);
    };


    Cone.prepareForCollisionDetection = function(obstacle, radius){
        var a = radius - 0.5* _height;
        var b = _height*0.5;
        var angleRight = Math.atan(b/a);
        return {
            type: 'cone',
            size: {
              width: _height,
              length: _height,
              height: _height
            },
            angle: {
                center: obstacle.position.angle,
                min: obstacle.position.angle - UTIL.convertRadiansToDegrees(angleRight),
                max: obstacle.position.angle + UTIL.convertRadiansToDegrees(angleRight)
            },
            distance: {
                center: obstacle.position.distance,
                min: obstacle.position.distance - (0.5*_height),
                max: obstacle.position.distance + (0.5*_height)
            }
        };
    };

    return Cone;
})(
    require('three'),
    require('../../UTIL')
);

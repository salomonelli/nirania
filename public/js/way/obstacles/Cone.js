module.exports = (function(THREE, UTIL) {
    function Cone(cone) {
        this.material = new THREE.MeshLambertMaterial({color: cone.color});
        this.geometry = new THREE.ConeGeometry(15, 30, 100, 100);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.receiveShadow = true;
        this.mesh.castShadow = true;
    }

    Cone.prototype.position = function(angle, distance, length, radius){
        radius += 15;
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
        var a = radius - 0.5* 30;
        var b = 30*0.5;
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

    return Cone;
})(
    require('three'),
    require('../../UTIL')
);

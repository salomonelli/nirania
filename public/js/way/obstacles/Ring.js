module.exports = (function(){
    var radius = 100;

    function Ring(ring){
        this.material = new THREE.MeshLambertMaterial( { color: ring.color } );
        this.geometry = new THREE.TorusGeometry(radius, 3, 16, 100 );
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    Ring.prototype.position = function(angle, distance, wayLength, radius){
        this.mesh.rotation.x += Math.PI/2;
        this.mesh.position.y = (wayLength / 2) - distance;
    };

    Ring.prepareForCollisionDetection = function(obstacle, radius){
        return {
            type: obstacle.type,
                size: obstacle.size,
            angle: {
            center: 0,
                min: 0,
                max: 360
        },
            distance: obstacle.position.distance
        };
    };

    return Ring;
})();
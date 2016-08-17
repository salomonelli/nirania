module.exports = (function(THREE){
    function CollisionDetector(mesh, obstacles, scene){
        this.mesh = mesh;
        this.obstacles = obstacles;
        this.scene = scene;

    }

    CollisionDetector.prototype.detectCollision = function () {

        var vector = new THREE.Vector3(0, -1, 0);
        var rayCaster = new THREE.Raycaster(this.mesh.position, vector);
        var forbiddenZones = [];

        for(var i = 0; i < this.obstacles.length < 1; i++){

            forbiddenZones.push(this.obstacles[i]);


        }
        co
        var intersects = rayCaster.intersectObjects(forbiddenZones);

    }

    return CollisionDetector;
})(

        require('three')

);
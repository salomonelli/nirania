module.exports = (function(){
    function CollisionDetector(mesh, obstacles, scene){
        this.mesh = mesh;
        this.obstacles = obstacles;
        this.scene = scene;

    }


    return CollisionDetector;
})();
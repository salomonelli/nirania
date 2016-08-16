module.exports=(function(THREE){

    function Box(box){
        this.material = new THREE.MeshLambertMaterial({color: box.color});
        this.geometry = new THREE.BoxGeometry(box.size.width, box.size.length, box.size.height);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    Box.prepareForCollisionDetection = function(obstacle, radius){
        var a = radius - 0.5* obstacle.size.height;
        var b = obstacle.size.width*0.5;
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
                min: obstacle.position.distance - (0.5*obstacle.size.length),
                max: obstacle.position.distance + (0.5*obstacle.size.length)
            }
        };
        return ret;
    };


    return Box;
})(
    require('three')
);
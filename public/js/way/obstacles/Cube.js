module.exports=(function(THREE){

    function Cube(cube){
        this.material = new THREE.MeshBasicMaterial({color: cube.color});
        this.geometry = new THREE.CubeGeometry(cube.size.x, cube.size.y, cube.size.z);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    return Cube;
})(
    require('three')
);
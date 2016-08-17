module.exports=(function(THREE){

    function Box(box){
        this.material = new THREE.MeshBasicMaterial({color: box.color});
        this.geometry = new THREE.BoxGeometry(box.size.x, box.size.y, box.size.z);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    return Box;
})(
    require('three')
);
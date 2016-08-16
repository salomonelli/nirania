module.exports = (function(){
    var radius = 100;

    function Ring(ring){
        this.material = new THREE.MeshBasicMaterial( { color: ring.color } );
        this.geometry = new THREE.TorusGeometry( radius, 3, 16, 100 );
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.rotation.x += Math.PI/2;
    }

    return Ring;
})();
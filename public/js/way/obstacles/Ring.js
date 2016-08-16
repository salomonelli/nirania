module.exports = (function(){
    function Ring(){
        var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
        var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        var torus = new THREE.Mesh( geometry, material );
        scene.add( torus );
    }

    module.exports = Ring();
})();
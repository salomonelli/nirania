module.exports = (function(THREE, UTIL){
  function Shooters(){
    this.geometry = new THREE.CylinderGeometry( 1, 1, UTIL.randomIntInRange(5,10), 32 );
    this.material = new THREE.MeshLambertMaterial({color: 0xDD2C00});
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    //this.mesh.receiveShadow = true;
    this.mesh.castShadow = true;
    this.continueShooting = true;
  }

  Shooters.prototype.move = function(){
    var move = function(){
      if(!this.continueShooting) return;
      
    };
  };



  return Shooters;
})(
  require('THREE'),
  require('../../UTIL')
);

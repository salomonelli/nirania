/**
 * Created by Jan-Philipp on 07.08.2016.
 */

var wallGeometry;
var wallMesh;
var activeWall = [];

function Wall(scene){
   this.scene = scene;

}

Wall.prototype.createWall = function(){
    wallGeometry = new THREE.PlaneGeometry( 30, 10 );
    wallMesh = new THREE.Mesh( wallGeometry,new THREE.MeshBasicMaterial() );
    activeWall.push(wallMesh);
    

}

Wall.prototype.wallMove = function(speed) {


    if(activeWall[activeWall.length - 1].position.z === 900)
    {
        Scene.prototype.removeObject(activeWall[activeWall.length - 1]);
        Wall.prototype.createWall();
        Scene.prototype.addObject( activeWall[activeWall.length - 1]);


    }
    wallMesh.position.z += speed;
   
}
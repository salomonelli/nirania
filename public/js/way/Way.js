module.exports = (function(THREE, COLOR){
    /**
     * Represents way
     * @param {number} length how long the way is
     * @param {number} speed how fast the way should move
     * @constructor
     */
    function Way(length, speed){
        this.length = length;
        this.speed = speed;
        this.geometry = new THREE.CylinderGeometry(100,100,1000,this.length);
        this.material = new THREE.MeshLambertMaterial({color: COLOR.way});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.y = -120;
        this.mesh.position.z = (-this.length*0.5)+50;
        this.mesh.rotation.x = Math.PI/2;
        console.dir(this.mesh.position)
    }

    /**
     * moves way direction z positive according to speed
     * @param {function} cb callback function
     */
    Way.prototype.moveForwardTillEnd = function(cb){
        var self = this;
        var t = self.length-80;
        var animate = function(){
            self.mesh.position.z++;
            t--;
            if(t > 0){
                setTimeout(function(){
                    animate();
                }, self.speed);
            }else{
                cb();
            }
        };
        animate();
    };

    /**
     * rotates the way around the z axis according to given angle
     * @param {number} angle
     */
    Way.prototype.rotate = function(angle){
        this.mesh.rotation.y = angle;
    };

    return Way;
})(
    require('three'),
    require('../COLOR')
);
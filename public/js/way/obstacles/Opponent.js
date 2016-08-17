module.exports= (function(Protagonist, UTIL, THREE){
    var heightFromWay = 20;

    function Opponent(){
        this.opponent = new Protagonist();
        this.opponent.body.mesh.material.color.setHex(0x000000);
        this.opponent.head.mesh.material.color.setHex(0x000000);
        this.opponent.left.leg.mesh.material.color.setHex(0x000000);
        this.opponent.right.leg.mesh.material.color.setHex(0x000000);
        this.mesh = null;
    }

    /**
     * Positions the opponent on way
     * @param {number} angle - angle of position in degrees
     * @param {number} distance - distance from starting point of way
     * @param {number} length - length of way
     * @param {number} radius - radius of way
     */
    Opponent.prototype.position = function(angle, distance, length, radius){
        angle = -(angle -90);
        angle = UTIL.convertDegreesToRadians(angle);
        radius += heightFromWay;
        var y = (length / 2) - distance;
        var x = radius * Math.cos(angle);
        var z = -(radius * Math.sin(angle));
        this.opponent.group.rotation.y += angle;
        this.opponent.group.position.set(x,y,z);
        this.opponent.group.rotation.z = Math.PI;
        this.mesh = this.opponent.group;
    };

    Opponent.prepareForCollisionDetection = function(){
        return {

        };
    };

    return Opponent;
})(
    require('../../protagonist/Protagonist'),
    require('../../UTIL'),
    require('three')
);

module.exports = (function(){
    function CollisionDetector(obstacles){
        this.obstacles = obstacles;
        console.log('CollisionDetector.constructor(): this.obstacles:');
        console.dir(this.obstacles);
    }

    /**
     *
     * @param {Object} currentPosition - contains the current distance and angle
     * @returns {boolean} - when true, then collision was detected
     */
    CollisionDetector.prototype.collision = function (currentPosition) {
        /*
        Algorithmus:
        mit einer foreach schleife alle obstacles(this.obstacles) durchlaufen.
        pro obstacle:
            Ist die Distanz des Obstacles  um 0.01 größer als die der currentPosition?
            wenn ja:
                dann kann das obstacle eine collision verursachen
                ist der winkel der currentposition derselbe wie der des obstacles?
                    wenn ja:
                        dann gibt es eine collision: return true
                    wenn nein:
                        keine collision: return false

        ACHTUNG: sagen wir mal das männchen ist an der Position 0°, und ein obstacle 3°.
        Dann gibt es trotzdem eine Collision, da die Breite des Männchens und des obstacles berücksichtigt werden müssen.
        für jedes obstacle wird ein minimaler und maximaler WInkel angegeben.
        genauso hat jedes obstacle eine minimale und maximale entfernung (berücksichtigung der länge eines objektes).
        zwischen disen Winkeln und Entfernungen befindet sich das obstacle.

        */
        return false;
    };

    /*

     alter code:
     var vector = new THREE.Vector3(0, -1, 0);
     var rayCaster = new THREE.Raycaster(this.mesh.position, vector);
     var forbiddenZones = [];

     for(var i = 0; i < this.obstacles.length < 1; i++){

     forbiddenZones.push(this.obstacles[i]);


     }
     co
     var intersects = rayCaster.intersectObjects(forbiddenZones);
     */

    return CollisionDetector;
})();
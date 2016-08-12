module.exports = (function(Head, Body, Leg, COLOR, $, THREE){


    /**
     * Represents Protagonist
     * @param {THREE.Scene} scene
     * @constructor
     */
    function Protagonist(scene){
        this.scene = scene;
        //create an empty container
        this.group = new THREE.Object3D();
        this.head = new Head();
        this.body = new Body();
        this.left = {
            leg: new Leg(),
            arm: null
        };
        this.right = {
            leg: new Leg(),
            arm: null
        };
        this.init();
        this.swing = {
            min: -1,
            max: -1
        }
    }

    Protagonist.prototype.getBody = function(cb){

    };

    Protagonist.prototype.init = function(){
        var self = this;
        //add body to group
        this.body.mesh.position.set(0,0,0);
        this.group.add(this.body.mesh);
        //ad head to group
        this.head.mesh.position.set(0,0.1,0);
        this.group.add(this.head.mesh);
        //add right leg to group
        this.right.leg.mesh.position.set(0.5,0,0);
        this.group.add(this.right.leg.mesh);
        //add left leg to group
        this.left.leg.mesh.position.set(0,0,0);
        this.group.add(this.left.leg.mesh);

        this.group.castShadow = true;
        this.group.scale.x = this.group.scale.y = this.group.scale.z = 10;
    };


    Protagonist.prototype.run = function(){



    };


    Protagonist.prototype.slide = function(){

    };

    Protagonist.prototype.standing = function(){
        this.standing = true;
        this.body.mesh.rotateZ(-Math.PI/16);
        this.body.mesh.rotateZ(Math.PI/4);
        this.standing();

    };

    Protagonist.prototype.animateJump = function(){
        console.log("JUMP");
        //console.log(mainScene.objects.protagonist.head.position.y);
        new TWEEN
            .Tween({jump: 0})
            .to({jump: Math.PI}, 500)
            .onUpdate(function () {
                console.log("Update");
                //this.body.mesh.position.y = 2000 * Math.sin(this.jump);
                mainScene.objects.protagonist.head.mesh.position.y = 2000 * Math.sin(this.jump);
            })
            .start();

    };


    Protagonist.prototype.animate = function(){
        /*if(this.swing === "left"){
         this.body.mesh.rotateZ(-Math.PI/16);
         this.swing = "right";
         }else{
         this.body.mesh.rotateZ(Math.PI/16);
         this.swing = "left";
         }*/

    };


    /**
     * loads blender files for protagonist
     * @param {function} cb
     */
    Protagonist.init = (function(){
        window.initMe++;
        var initUs = [
            Leg,
            Body,
            Head
        ];
        var initCount = initUs.length;
        initUs.forEach(function (initMe) {
            initMe.init(function () {
                initCount--;
                if (initCount === 0) {
                    $(window).trigger('init');
                }
            });
        });
    })();

    return Protagonist;
})(
    require('./Head'),
    require('./Body'),
    require('./Leg'),
    require('../COLOR'),
    require('jquery'),
    require('three')
);
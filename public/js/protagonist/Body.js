module.exports = (function(COLOR, THREE){
    /**
     * Created by sarasteiert on 05/08/16.
     */
    function Body(){
        this.mesh = null;
        this.geometry = null;
        this.init();
    }


    Body.prototype.init = function(){
        var _this=this;

        // init body
        var material = new THREE.MeshLambertMaterial({
            color: 0xffffff,
            transparent: false,
            opacity: 0.8
        });

        this.mesh = new THREE.Mesh(Body.geometry, material);
        //this.mesh.scale.x = this.mesh.scale.y = this.mesh.scale.z = 50;
        //this.mesh.castShadow = true;
        /*
         //init glow
         var customMaterial = new THREE.ShaderMaterial(
         {
         uniforms:
         {
         "c":   { type: "f", value: 0.1 },
         "p":   { type: "f", value: 3 },
         glowColor: { type: "c", value: new THREE.Color(0xffff00) },
         viewVector: { type: "v3", value: this.camera.position }
         },
         vertexShader:   document.getElementById( 'vertexShader'   ).textContent,
         fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
         side: THREE.FrontSide,
         blending: THREE.AdditiveBlending,
         transparent: true
         }   );


         this.glow = new THREE.Mesh( Body.geometry.clone(), customMaterial.clone() );
         this.glow.position = this.mesh.position;
         this.glow.scale.multiplyScalar(this.mesh.scale.z*3);
         console.dir(this.glow.size);
         //this.scene.add( this.moonGlow );

         window.setP=function(x){
         _this.glow.material.uniforms[ "p" ].value = x;
         };
         window.setC=function(x){
         _this.glow.material.uniforms[ "c" ].value = x;
         };

         */
        //this.mesh.position.y = 100;
        //this.mesh.rotation.y = Math.PI; /// 2;
        //this.mesh.castShadow = true;




        //this.mesh.translation = THREE.GeometryUtils.center(Body.geometry);
    };


    Body.init = function(cb){
        var loader = new THREE.JSONLoader();
        loader.load('/js/blender/type1/body.json', function(geometry, materials) {
            Body.geometry = geometry;
            cb();
        });
    };

    return Body;
})(
    require('../COLOR'),
    require('three')
);
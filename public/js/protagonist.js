function Protagonist(){
    var scene = null;
    var head = null;
    var body = null;
    var foot = {
        left: null,
        right: null
    };
    var hand = {
        left: null,
        right: null
    };

    this.init = function(s){
        scene = s;
        var loader = new THREE.JSONLoader();
        loader.load('blender/body.json', function(geometry) {
            body = new THREE.Mesh(geometry);
            scene.add(body);
        });
    };
}

Protagonist.prototype.init = function(scene){
    this.init(scene);
};


Protagonist.prototype.run = function(){

};


Protagonist.prototype.slide = function(){

};

Protagonist.prototype.jump = function(){

};
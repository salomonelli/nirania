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

    this.getBody = function(cb){
        var loader = new THREE.JSONLoader();
        loader.load('/js/blender/body2.json', function(geometry, materials) {
            body = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: COLOR.protagonist.body}));
            body.scale.x = body.scale.y = body.scale.z = 20;
            body.translation = THREE.GeometryUtils.center(geometry);
            cb();
        });
    };

    this.init = function(s){
        scene = s;
        //get body form blender
        this.getBody(function(){
            head = new THREE.Mesh(
                new THREE.SphereGeometry(25, 20, 15),
                new THREE.MeshBasicMaterial({color: COLOR.protagonist.head})
            );
            head.position.set(0, 80, 0);
            scene.add(head);
            body.position.z = 700;
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
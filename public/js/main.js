var initUs = [
    Leg,
    Body
];
var initCount = initUs.length;
initUs.forEach(function (initMe) {
    initMe.init(function () {
        initCount--;
        if (initCount === 0) {
            main();
        }
    });
});

var mainScene;

function main() {
    mainScene = new Scene(window.innerWidth, window.innerHeight);
    $(".sk-folding-cube").remove();
    $(".loading").fadeOut(3000);
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
   
        Wall.prototype.wallMove(5);
        mainScene.render();
    


}
function jump(){
    Protagonist.prototype.animateJump();
}
document.addEventListener('keydown', function(event)

{
    var code = event.keyCode;
    switch (code) {
        case 32 :
            jump();
            break;
    }
});
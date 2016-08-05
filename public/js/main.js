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

var scene;

function main() {
    scene = new Scene(window.innerWidth, window.innerHeight);
    $(".sk-folding-cube").remove();
    $(".loading").fadeOut(3000);
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    scene.render();
}
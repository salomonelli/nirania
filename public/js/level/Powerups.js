module.exports = (function(){
    function Powerups(){
    }

    Powerups.getPowerups = function(){
        return [
            {
                id: 1,
                description: "boosts speed",
                diamonds: 3,
                img: "/img/01.jpg"
            },
            {
                id: 2,
                description: "jump higher",
                diamonds: 5,
                img: "/img/02.jpg"
            },
            {
                id: 3,
                description: "bblala",
                diamonds: 7,
                img: "/img/03.jpg"
            },
            {
                id: 4,
                description: "bblala",
                diamonds: 7,
                img: "/img/03.jpg"
            },
            {
                id: 5,
                description: "bblala",
                diamonds: 7,
                img: "/img/03.jpg"
            },
            {
                id: 6,
                description: "bblala",
                diamonds: 7,
                img: "/img/03.jpg"
            },
            {
                id: 7,
                description: "bblala",
                diamonds: 7,
                img: "/img/03.jpg"
            }
        ];
    };



    return Powerups;
})();

const KEY_MAP_LEFT = {
    KeyA: 'left',
    KeyD: 'right',
    KeyW: 'up'
};

const KEY_MAP_RIGHT = {
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up'
};

const KEY_MAP_SINGLE = Object.assign(KEY_MAP_LEFT, KEY_MAP_RIGHT);

export const getActionByKey = (code, twoPlayers, leftPlayer)  => {
    if(!twoPlayers) return KEY_MAP_SINGLE[code];
    if(!leftPlayer) return KEY_MAP_RIGHT[code];
    if(leftPlayer) return KEY_MAP_LEFT[code];
    return;
};

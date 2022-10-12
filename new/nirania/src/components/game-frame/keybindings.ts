const KEY_MAP_LEFT: any = {
    KeyA: 'left',
    KeyD: 'right',
    KeyW: 'up',
    KeyP: 'pause'
};

const KEY_MAP_RIGHT: any = {
    ArrowLeft: 'left',
    ArrowRight: 'right',
    ArrowUp: 'up'
};

const KEY_MAP_SINGLE = Object.assign(KEY_MAP_LEFT, KEY_MAP_RIGHT);

export const getActionByKey = (code: any, twoPlayers: any, leftPlayer: any) => {
    if (!twoPlayers) return KEY_MAP_SINGLE[code];
    if (!leftPlayer) return KEY_MAP_RIGHT[code];
    if (leftPlayer) return KEY_MAP_LEFT[code];
    return;
};

/**
 * converts degrees to radians
 * @param {number} degrees
 * @returns {number}
 */
export function convertDegreesToRadians(degrees: number) {
    return degrees * (Math.PI / 180);
};

/**
 * converts radians to degrees
 * @param {number} radians
 * @returns {number}
 */
export function convertRadiansToDegrees(radians: number) {
    return radians * (180 / Math.PI);
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * TODO duschen!!
 * @returns {number}
 */
export function randomNumberInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
};

/**
 * Returns a random int between min (inclusive) and max (exclusive)
 * @returns {number}
 */
export function randomIntInRange(min: number, max: number) {
    return Math.round(randomNumberInRange(min, max));
};

/**
 * normalizes angle
 * @param {number} angle - in degrees
 */
export function normalizeAngle(angle: number) {
    //if (angle < 0) angle = angle + 360; //always positive
    return angle % 360; //always <360
};

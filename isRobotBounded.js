/**
 * @param {string} instructions
 * @return {boolean}
 */
var angle = 0;
var posX = 0;
var posY = 0;
var isRobotBounded = function (instructions) {
    var ar = instructions.split('');
    ar.forEach(element => {
        switch (element) {
            case 'G':
                oneStep();
                break;
            case 'L':
                setAngle(-90);
                break;
            case 'R':
                setAngle(90);
                break;
        }
    });
    console.log(posX, posY);
    return (posX === 0 && posY === 0);
};

function oneStep() {
    switch (angle) {
        case 0:
        case -0:
            posY += 1;
            break;
        case 90:
        case -270:
            posX += 1;
            break;
        case 180:
        case -180:
            posY -= 1;
            break;
        case 270:
        case -90:
            posX -= 1;
            break;
    }
}

function setAngle(value) {
    angle += value;
    angle = angle % 360;
}

function getAlphabetCount(str, alphabet) {
    let regexp = RegExp(alphabet, 'g');
    return str.match(regexp).length;
}

console.log(isRobotBounded('GL'));
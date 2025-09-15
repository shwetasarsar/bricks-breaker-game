export const createInitialBall =()=>({
    x: 400,
    y: 350,
    radius: 20,
    speedX: 4,
    speedY: -4
});

export const createInitialPaddle =()=>({
    x: 300,
    y: 500,
    width: 150,
    height: 20,
    speed: 0
});

export const createInitialBricks =()=>([])

export const brickContainer = {
    row: 4,
    col: 7,
    width: 100,
    height: 50,
    padding: 10,
    offsetLeft: 30,
    offsetTop: 30
}
const canvas = document.getElementById('pong');
if (canvas) {
    const ctx = canvas.getContext('2d');

    const paddleWidth = 10, paddleHeight = 80;
    let leftY = 160, rightY = 160;
    const ballSize = 10;
    let ballX = 295, ballY = 195, ballDX = 4, ballDY = 4;

    function draw() {
        ctx.clearRect(0, 0, 600, 400);

        // Draw paddles (blue)
        ctx.fillStyle = 'blue';
        ctx.fillRect(10, leftY, paddleWidth, paddleHeight);
        ctx.fillRect(580, rightY, paddleWidth, paddleHeight);

        // Draw ball (red)
        ctx.fillStyle = 'red';
        ctx.fillRect(ballX, ballY, ballSize, ballSize);
    }

function update() {
    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with top/bottom
    if (ball.y <= 0 || ball.y + ball.size >= GAME_HEIGHT) {
        ball.dy = -ball.dy;
    }

    // Ball collision with paddles
    if (
        ball.x <= PADDLE_WIDTH &&
        ball.y + ball.size > leftPaddle.y &&
        ball.y < leftPaddle.y + PADDLE_HEIGHT
    ) {
        ball.dx = -ball.dx;
    }

    if (
        ball.x + ball.size >= GAME_WIDTH - PADDLE_WIDTH &&
        ball.y + ball.size > rightPaddle.y &&
        ball.y < rightPaddle.y + PADDLE_HEIGHT
    ) {
        ball.dx = -ball.dx;
    }

    // Ball out of bounds (reset)
    if (ball.x < 0 || ball.x > GAME_WIDTH) {
        resetBall();
    }
}
// Draw paddles (blue)
ctx.fillStyle = 'blue';
ctx.fillRect(leftX, leftY, paddleWidth, paddleHeight);
ctx.fillRect(580, rightY, paddleWidth, paddleHeight);

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        leftX += 10; // Move the left paddle to the right
    } else if (event.key === 'a') {
        leftX -= 10; // Move the left paddle to the left
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        leftX += 10; // Move the left paddle to the right
    }
});

function resetBall() {
    ball.x = GAME_WIDTH / 2;
    ball.y = GAME_HEIGHT / 2;
    ball.dx = 4 * (Math.random() > 0.5 ? 1 : -1);
    ball.dy = 4 * (Math.random() > 0.5 ? 1 : -1);
}
let leftX = 10;
// Paddle controls
document.addEventListener('keydown', e => {
    if (e.key === 'w' && leftY > 0) leftY -= 20;
    if (e.key === 's' && leftY < 320) leftY += 20;
    if (e.key === 'ArrowUp' && rightY > 0) rightY -= 20;
    if (e.key === 'ArrowDown' && rightY < 320) rightY += 20;
    if (e.key === 'd') {
        // Move left paddle 5 pixels in x direction
        leftX += 5;
    }
});



    function loop() {
        update();
        draw();
        requestAnimationFrame(loop);
    }

    loop();
}
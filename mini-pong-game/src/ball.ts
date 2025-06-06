class Ball {
    position: { x: number; y: number };
    velocity: { x: number; y: number };
    radius: number;

    constructor(x: number, y: number, radius: number) {
        this.position = { x, y };
        this.velocity = { x: 5, y: 5 };
        this.radius = radius;
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    checkCollision(paddle: { position: { x: number; y: number }; width: number; height: number }) {
        if (
            this.position.x + this.radius > paddle.position.x &&
            this.position.x - this.radius < paddle.position.x + paddle.width &&
            this.position.y + this.radius > paddle.position.y &&
            this.position.y - this.radius < paddle.position.y + paddle.height
        ) {
            this.velocity.x = -this.velocity.x;
        }
    }

    checkWallCollision(canvasHeight: number) {
        if (this.position.y + this.radius > canvasHeight || this.position.y - this.radius < 0) {
            this.velocity.y = -this.velocity.y;
        }
    }
}
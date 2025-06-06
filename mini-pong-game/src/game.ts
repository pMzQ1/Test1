import { Paddle } from './paddle';
import { Ball } from './ball';

class Game {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private paddle: Paddle;
    private ball: Ball;
    private gameLoop: number;

    constructor() {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d')!;
        this.canvas.width = 800;
        this.canvas.height = 400;
        document.body.appendChild(this.canvas);

        this.paddle = new Paddle(10, this.canvas.height / 2 - 50, 10, 100);
        this.ball = new Ball(this.canvas.width / 2, this.canvas.height / 2, 10);

        this.initialize();
    }

    private initialize() {
        this.gameLoop = requestAnimationFrame(this.update.bind(this));
        this.setupControls();
    }

    private setupControls() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowUp') {
                this.paddle.move(-5);
            } else if (event.key === 'ArrowDown') {
                this.paddle.move(5);
            }
        });
    }

    private update() {
        this.clearCanvas();
        this.paddle.draw(this.context);
        this.ball.update();
        this.ball.draw(this.context);
        this.checkCollisions();
        this.gameLoop = requestAnimationFrame(this.update.bind(this));
    }

    private clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private checkCollisions() {
        if (this.ball.x <= this.paddle.x + this.paddle.width &&
            this.ball.y >= this.paddle.y &&
            this.ball.y <= this.paddle.y + this.paddle.height) {
            this.ball.reverseX();
        }

        if (this.ball.y <= 0 || this.ball.y >= this.canvas.height) {
            this.ball.reverseY();
        }
    }
}

new Game();
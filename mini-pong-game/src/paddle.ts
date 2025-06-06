class Paddle {
    constructor(public x: number, public y: number, public width: number, public height: number) {}

    moveUp() {
        this.y -= 10; // Move paddle up by 10 pixels
    }

    moveDown() {
        this.y += 10; // Move paddle down by 10 pixels
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }

    getSize() {
        return { width: this.width, height: this.height };
    }
}

export default Paddle;
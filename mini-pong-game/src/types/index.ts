export interface GameObject {
    position: Vector;
    size: Vector;
    update(): void;
    render(context: CanvasRenderingContext2D): void;
}

export interface Vector {
    x: number;
    y: number;
}
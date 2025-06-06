# Mini Pong Game

This is a simple implementation of the classic Pong game using TypeScript. The game features two paddles controlled by players and a ball that bounces between them. 

## Project Structure

```
mini-pong-game
├── src
│   ├── game.ts        # Main entry point for the Pong game
│   ├── paddle.ts      # Paddle class for player controls
│   ├── ball.ts        # Ball class for game mechanics
│   └── types
│       └── index.ts   # Type definitions for game objects
├── package.json       # NPM configuration file
├── tsconfig.json      # TypeScript configuration file
└── README.md          # Project documentation
```

## Getting Started

To run the game, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mini-pong-game.git
   cd mini-pong-game
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Compile TypeScript files:**
   ```bash
   npx tsc
   ```

4. **Run the game:**
   You can use a local server to serve the `index.html` file or use a tool like `lite-server` to run it automatically.

## Controls

- Player 1 (Left Paddle): Use the 'W' key to move up and 'S' key to move down.
- Player 2 (Right Paddle): Use the 'Up Arrow' key to move up and 'Down Arrow' key to move down.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you'd like to add!

## License

This project is open-source and available under the MIT License.
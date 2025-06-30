# Mob Control Clone

This is a minimal boilerplate for a 3D Phaser game similar to **Mob Control**. It uses **enable3d** to add 3D capabilities to Phaser and Vercel serverless functions to store scores in MongoDB Atlas.

## Project Structure

```
public/          # Static files (index.html)
src/             # Game code
  main.js        # Phaser init
  scenes/        # Game scenes
  utils/         # API helpers
api/             # Vercel serverless functions
```

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file based on `.env.example` and provide your MongoDB Atlas connection string.

```
MONGODB_URI=your_connection_string
```

Vercel will use this environment variable to connect to the database when handling requests to `/api/score`.


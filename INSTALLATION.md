# Installation Manual (Windows)

This guide is for Windows users who want to run the game locally.

## Prerequisites
- Node.js LTS (includes npm)
- Git for Windows

## Option 1: Install From Git Remote
1. Open PowerShell.
2. Clone the repo:
```
git clone https://github.com/jiecolao/pyquest-game.git
```
3. Enter the project folder:
```
cd pyquest-game
```
4. Install dependencies:
```
npm install
```
5. Run the dev server:
```
npm run dev
```
6. Open the app:
```
http://localhost:5173
```

## Option 2: Run the Batch Script (Recommended)
1. Clone the repo (see Option 1).
2. Double-click `run-dev.bat` from the project root.
3. Open the app at `http://localhost:5173`.

## Troubleshooting
### Run Dev Tool During Gameplay
- For debugging and conveniece/, toggle DevTool by pressing Ctrl + Alt + Shift + D

### Port already in use
- If `5173` is busy, stop the process using it or change the port in Vite.
- If `5000` is busy, stop the process using it or update the API server port.

### npm install fails
- Ensure Node.js LTS is installed: `node -v` and `npm -v`.
- Delete `node_modules` and `package-lock.json`, then re-run `npm install`.

### Command not found
- If `node` or `npm` is not recognized, restart your terminal after installing Node.js.


@echo off
setlocal

rem Ensure the script runs from the repo root.
cd /d "%~dp0"

rem Check that npm is available.
where npm >nul 2>&1
if errorlevel 1 (
  echo npm was not found on PATH. Please install Node.js and try again.
  echo https://nodejs.org/
  pause
  exit /b 1
)

rem Install dependencies if node_modules is missing.
if not exist "node_modules" (
  echo Installing dependencies...
  npm install
  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo Starting dev server...
npm run dev

if errorlevel 1 (
  echo Dev server exited with an error.
  pause
  exit /b 1
)

endlocal

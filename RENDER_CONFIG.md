# Render.com Build Configuration

## Build Command
```bash
cd frontend && npm install && node node_modules/vite/bin/vite.js build
```

## Publish Directory
```
frontend/dist
```

## Environment Variables
- NODE_VERSION: 18

## Alternative Build Commands (if the above doesn't work):

### Option 1: Using npx with explicit path
```bash
cd frontend && npm install && ./node_modules/.bin/vite build
```

### Option 2: Using npm script
```bash
cd frontend && npm install && npm run build:render
```

### Option 3: Direct node execution
```bash
cd frontend && npm install && node ./node_modules/vite/bin/vite.js build
```

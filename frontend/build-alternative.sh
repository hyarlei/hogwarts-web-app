#!/bin/bash
set -e

echo "🔧 Starting Harry Potter frontend build..."

# Fix all permissions recursively and specifically for esbuild
echo "🔐 Fixing permissions..."
chmod -R +x node_modules/.bin/ 2>/dev/null || true
find node_modules -name "esbuild" -type f -exec chmod +x {} + 2>/dev/null || true
find node_modules -path "*/bin/esbuild" -exec chmod +x {} + 2>/dev/null || true

# Alternative approach: use node directly
if [ -f "node_modules/vite/bin/vite.js" ]; then
    echo "✅ Using direct node approach..."
    # Set explicit esbuild path if needed
    export ESBUILD_BINARY_PATH="./node_modules/@esbuild/linux-x64/bin/esbuild"
    chmod +x "$ESBUILD_BINARY_PATH" 2>/dev/null || true
    node node_modules/vite/bin/vite.js build
else
    echo "✅ Using npx approach..."
    npx vite build
fi

echo "🏰 Build completed successfully!"

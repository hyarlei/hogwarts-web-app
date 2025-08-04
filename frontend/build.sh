#!/bin/bash
set -e

echo "🔧 Fixing permissions for build tools..."

# Fix permissions for all binaries
find node_modules/.bin -type f -exec chmod +x {} + 2>/dev/null || true
find node_modules -name "*.sh" -exec chmod +x {} + 2>/dev/null || true

# Fix esbuild specifically
if [ -f "node_modules/@esbuild/linux-x64/bin/esbuild" ]; then
    chmod +x node_modules/@esbuild/linux-x64/bin/esbuild
fi

# Fix vite specifically
if [ -f "node_modules/.bin/vite" ]; then
    chmod +x node_modules/.bin/vite
fi

echo "✅ Permissions fixed, starting build..."

# Use npx instead of direct vite command
npx vite build

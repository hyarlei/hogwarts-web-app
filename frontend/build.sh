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

echo "✅ Permissions fixed, starting build..."
npx vite build

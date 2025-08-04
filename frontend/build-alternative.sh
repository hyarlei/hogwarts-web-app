#!/bin/bash
set -e

echo "🔧 Starting Harry Potter frontend build..."

# Fix all permissions recursively
chmod -R +x node_modules/.bin/ 2>/dev/null || true

# Alternative approach: use node directly
if [ -f "node_modules/vite/bin/vite.js" ]; then
    echo "✅ Using direct node approach..."
    node node_modules/vite/bin/vite.js build
else
    echo "✅ Using npx approach..."
    npx vite build
fi

echo "🏰 Build completed successfully!"

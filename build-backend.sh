#!/bin/bash

echo "🏰 Build do backend Harry Potter..."
cd backend

echo "📦 Instalando dependências..."
npm install

echo "🔧 Corrigindo permissões..."
chmod +x node_modules/.bin/* 2>/dev/null || true

echo "🔮 Gerando cliente Prisma..."
# Usar caminho direto para evitar problemas de permissão
node node_modules/prisma/build/index.js generate || node_modules/.bin/prisma generate

echo "⚡ Compilando TypeScript..."
npm run build

echo "✅ Build concluído!"

#!/bin/bash

# Script de build para Render.com - Backend Harry Potter
echo "🏰 Iniciando build do backend Harry Potter..."

# Navegar para o diretório do backend
cd backend

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Gerar cliente Prisma
echo "🔮 Gerando cliente Prisma..."
npx prisma generate

# Compilar TypeScript
echo "⚡ Compilando TypeScript..."
npm run build

# Verificar se a pasta dist foi criada
if [ -d "dist" ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📁 Arquivos compilados em backend/dist/"
    ls -la dist/
else
    echo "❌ Erro: Pasta dist não foi criada"
    exit 1
fi

echo "🎯 Backend pronto para deploy!"

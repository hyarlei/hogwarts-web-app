#!/bin/bash

echo "🏰 Iniciando build do backend Harry Potter..."

# Navegar para o diretório do backend
cd backend

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: package.json não encontrado no diretório backend"
    exit 1
fi

echo "📁 Diretório atual: $(pwd)"
echo "📦 Instalando dependências..."

# Instalar dependências
npm install

echo "� Corrigindo permissões..."
# Corrigir permissões dos executáveis
chmod +x node_modules/.bin/* 2>/dev/null || true
chmod +x node_modules/.bin/prisma 2>/dev/null || true

echo "�🔮 Gerando cliente Prisma..."

# Gerar cliente Prisma com caminho absoluto
if [ -f "node_modules/.bin/prisma" ]; then
    node_modules/.bin/prisma generate
else
    node node_modules/prisma/build/index.js generate
fi

echo "⚡ Compilando TypeScript..."

# Compilar TypeScript
npm run build

# Verificar se a compilação foi bem-sucedida
if [ -d "dist" ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📁 Arquivos compilados:"
    ls -la dist/
else
    echo "❌ Erro: Pasta dist não foi criada"
    exit 1
fi

echo "🎯 Backend pronto para deploy!"

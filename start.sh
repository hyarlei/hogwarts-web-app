#!/bin/bash

echo "🚀 Iniciando servidor Harry Potter..."

# Navegar para o diretório do backend
cd backend

# Verificar se o build existe
if [ ! -d "dist" ]; then
    echo "❌ Erro: Diretório dist não encontrado. Execute o build primeiro."
    exit 1
fi

echo "📁 Diretório atual: $(pwd)"
echo "🎯 Iniciando servidor..."

# Iniciar o servidor
npm start

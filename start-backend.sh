#!/bin/bash

echo "🚀 Iniciando servidor Harry Potter..."
cd backend

echo "📁 Verificando build..."
if [ ! -d "dist" ]; then
    echo "❌ Erro: Build não encontrado"
    exit 1
fi

echo "🎯 Iniciando servidor..."
npm start

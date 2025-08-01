<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instruções para o GitHub Copilot - Projeto Harry Potter

Este é um projeto full-stack inspirado no universo de Harry Potter com as seguintes características:

## Arquitetura
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + TypeScript + Express + Prisma
- **Banco de Dados**: SQLite com Prisma ORM

## Convenções de Código

### Geral
- Use sempre TypeScript com tipagem rigorosa
- Prefira interfaces explícitas para todos os tipos
- Use async/await em vez de Promises chains
- Implemente tratamento adequado de erros

### Frontend (React)
- Use componentes funcionais com React Hooks
- Implemente estados locais com useState e useEffect
- Use React Router DOM para navegação
- Mantenha a tipagem TypeScript consistente
- Use o padrão de nomenclatura PascalCase para componentes
- Implemente loading states e error handling

### Backend (Node.js)
- Use Express.js com middleware apropriado
- Implemente todas as rotas com tipagem TypeScript
- Use Prisma Client para interações com banco de dados
- Mantenha separação clara entre rotas, lógica de negócio e acesso a dados
- Implemente tratamento de erros consistente

### Estilo e UI
- Use a paleta de cores das casas de Hogwarts
- Implemente design responsivo
- Use CSS moderno com variáveis customizadas
- Mantenha consistência visual com o tema mágico

## Dados do Projeto
O projeto contém dados autênticos do universo Harry Potter:
- 4 Casas de Hogwarts com sistema de pontuação
- Personagens principais com informações detalhadas
- Feitiços categorizados por dificuldade
- Poções com ingredientes e instruções
- Localizações emblemáticas do mundo mágico

## APIs Disponíveis
- `/api/houses` - Gerenciamento de casas
- `/api/characters` - Catálogo de personagens
- `/api/spells` - Biblioteca de feitiços
- `/api/potions` - Receitas de poções
- `/api/locations` - Mapa de localizações

Quando trabalhar neste projeto, mantenha sempre o tema mágico e a fidelidade ao universo de Harry Potter.

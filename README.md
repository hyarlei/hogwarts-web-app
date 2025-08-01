# 🏰 Mundo Mágico de Harry Potter

Uma aplicação full-stack desenvolvida com React/TypeScript no frontend e Node.js/TypeScript com Prisma e SQLite no backend, inspirada no universo de Harry Potter.

## ⚡ Funcionalidades

- **🏠 Sistema de Casas**: Explore as quatro casas de Hogwarts com sistema de pontuação
- **👥 Personagens**: Catálogo completo dos personagens principais com informações detalhadas
- **⚡ Feitiços**: Biblioteca de feitiços com diferentes níveis de dificuldade
- **🧪 Poções**: Receitas e ingredientes das poções mais famosas
- **📍 Localizações**: Mapa dos lugares mais emblemáticos do mundo mágico

## 🛠️ Tecnologias Utilizadas

### Frontend
- React 18
- TypeScript
- React Router DOM
- Axios
- Vite
- CSS3 com variáveis customizadas

### Backend
- Node.js
- TypeScript
- Express.js
- Prisma ORM
- SQLite
- CORS

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Backend

1. Navegue até o diretório do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
```bash
npm run db:generate
npm run db:migrate
npm run db:seed
```

4. Inicie o servidor:
```bash
npm run dev
```

O backend estará rodando em `http://localhost:3001`

### Frontend

1. Navegue até o diretório do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O frontend estará rodando em `http://localhost:3000`

## 📊 API Endpoints

### Casas
- `GET /api/houses` - Lista todas as casas
- `GET /api/houses/:id` - Busca casa por ID
- `PUT /api/houses/:id/points` - Atualiza pontos da casa
- `POST /api/houses/:id/add-points` - Adiciona pontos à casa

### Personagens
- `GET /api/characters` - Lista todos os personagens
- `GET /api/characters/:id` - Busca personagem por ID
- `GET /api/characters/house/:houseId` - Lista personagens por casa
- `POST /api/characters` - Cria novo personagem

### Feitiços
- `GET /api/spells` - Lista todos os feitiços
- `GET /api/spells/:id` - Busca feitiço por ID
- `GET /api/spells/type/:type` - Lista feitiços por tipo

### Poções
- `GET /api/potions` - Lista todas as poções
- `GET /api/potions/:id` - Busca poção por ID

### Localizações
- `GET /api/locations` - Lista todas as localizações
- `GET /api/locations/:id` - Busca localização por ID

## 🎨 Design

O projeto utiliza uma paleta de cores baseada nas casas de Hogwarts:
- **Grifinória**: Vermelho (#740001) e Dourado (#D3A625)
- **Sonserina**: Verde (#1A472A) e Prata (#AAAAAA)
- **Corvinal**: Azul (#0E1A40) e Bronze (#946B2D)
- **Lufa-Lufa**: Amarelo (#ECB939) e Preto (#000000)

## 📁 Estrutura do Projeto

```
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── index.ts
│   │   └── seed.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── types/
│   │   └── App.tsx
│   └── package.json
└── README.md
```

## 🌟 Recursos Especiais

- Interface responsiva e moderna
- Animações CSS suaves
- Sistema de filtros para personagens
- Gerenciamento de estado com React Hooks
- API RESTful completa
- Banco de dados populado com dados autênticos do universo Harry Potter

## 📝 Scripts Disponíveis

### Backend
- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o TypeScript
- `npm run start` - Inicia o servidor em produção
- `npm run db:migrate` - Executa migrações do banco
- `npm run db:seed` - Popula o banco com dados iniciais
- `npm run db:studio` - Abre o Prisma Studio

### Frontend
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🎓 Créditos

Desenvolvido com ❤️ para todos os fãs do mundo mágico de Harry Potter criado por J.K. Rowling.

---

*"A felicidade pode ser encontrada mesmo nas horas mais sombrias, se você se lembrar de acender a luz."* - Albus Dumbledore

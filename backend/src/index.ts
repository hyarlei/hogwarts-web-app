import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';

// Routes
import charactersRouter from './routes/characters';
import housesRouter from './routes/houses';
import locationsRouter from './routes/locations';
import potionsRouter from './routes/potions';
import spellsRouter from './routes/spells';

const app = express();
const port = process.env.PORT || 3001;
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/houses', housesRouter);
app.use('/api/characters', charactersRouter);
app.use('/api/spells', spellsRouter);
app.use('/api/potions', potionsRouter);
app.use('/api/locations', locationsRouter);

// Health check
app.get('/api', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Bem-vindo ao mundo mágico de Harry Potter!',
    timestamp: new Date().toISOString()
  });
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado no mundo mágico!' });
});

async function main() {
  try {
    await prisma.$connect();
    console.log('🏰 Conectado ao banco de dados de Hogwarts!');
    
    app.listen(port, () => {
      console.log(`🧙‍♂️ Servidor rodando na porta ${port}`);
      console.log(`📖 Documentação da API: http://localhost:${port}/api`);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco:', error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('🏃‍♂️ Desconectando do banco...');
  await prisma.$disconnect();
  process.exit(0);
});

main().catch(console.error);

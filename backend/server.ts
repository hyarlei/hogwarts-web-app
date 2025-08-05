import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';

// Routes
import charactersRouter from './src/routes/characters';
import housesRouter from './src/routes/houses';
import locationsRouter from './src/routes/locations';
import potionsRouter from './src/routes/potions';
import spellsRouter from './src/routes/spells';

const app = express();
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

app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'API do Harry Potter está funcionando!',
    endpoints: [
      '/api/houses',
      '/api/characters', 
      '/api/spells',
      '/api/potions',
      '/api/locations'
    ]
  });
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado no mundo mágico!' });
});

// Export para Vercel
export default app;

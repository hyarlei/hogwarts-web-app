import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/locations - Listar todas as localizações
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const locations = await prisma.location.findMany();
    res.json(locations);
  } catch (error) {
    console.error('Erro ao buscar localizações:', error);
    res.status(500).json({ error: 'Erro ao buscar localizações' });
  }
});

// GET /api/locations/:id - Buscar localização por ID
router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const location = await prisma.location.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!location) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }
    
    res.json(location);
  } catch (error) {
    console.error('Erro ao buscar localização:', error);
    res.status(500).json({ error: 'Erro ao buscar localização' });
  }
});

export default router;

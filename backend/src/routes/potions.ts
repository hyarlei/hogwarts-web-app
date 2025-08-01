import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/potions - Listar todas as poções
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const potions = await prisma.potion.findMany();
    res.json(potions);
  } catch (error) {
    console.error('Erro ao buscar poções:', error);
    res.status(500).json({ error: 'Erro ao buscar poções' });
  }
});

// GET /api/potions/:id - Buscar poção por ID
router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const potion = await prisma.potion.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!potion) {
      return res.status(404).json({ error: 'Poção não encontrada' });
    }
    
    res.json(potion);
  } catch (error) {
    console.error('Erro ao buscar poção:', error);
    res.status(500).json({ error: 'Erro ao buscar poção' });
  }
});

export default router;

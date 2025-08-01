import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/houses - Listar todas as casas
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const houses = await prisma.house.findMany({
      include: {
        characters: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
    res.json(houses);
  } catch (error) {
    console.error('Erro ao buscar casas:', error);
    res.status(500).json({ error: 'Erro ao buscar casas de Hogwarts' });
  }
});

// GET /api/houses/:id - Buscar casa por ID
router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const house = await prisma.house.findUnique({
      where: { id: parseInt(id) },
      include: {
        characters: true
      }
    });
    
    if (!house) {
      return res.status(404).json({ error: 'Casa não encontrada' });
    }
    
    res.json(house);
  } catch (error) {
    console.error('Erro ao buscar casa:', error);
    res.status(500).json({ error: 'Erro ao buscar casa' });
  }
});

// PUT /api/houses/:id/points - Atualizar pontos da casa
router.put('/:id/points', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { points } = req.body;
    
    const house = await prisma.house.update({
      where: { id: parseInt(id) },
      data: { points: parseInt(points) }
    });
    
    res.json(house);
  } catch (error) {
    console.error('Erro ao atualizar pontos:', error);
    res.status(500).json({ error: 'Erro ao atualizar pontos da casa' });
  }
});

// POST /api/houses/:id/add-points - Adicionar pontos à casa
router.post('/:id/add-points', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { points } = req.body;
    
    const house = await prisma.house.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!house) {
      return res.status(404).json({ error: 'Casa não encontrada' });
    }
    
    const updatedHouse = await prisma.house.update({
      where: { id: parseInt(id) },
      data: { points: house.points + parseInt(points) }
    });
    
    res.json(updatedHouse);
  } catch (error) {
    console.error('Erro ao adicionar pontos:', error);
    res.status(500).json({ error: 'Erro ao adicionar pontos à casa' });
  }
});

export default router;

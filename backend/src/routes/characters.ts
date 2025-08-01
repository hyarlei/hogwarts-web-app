import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/characters - Listar todos os personagens
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const characters = await prisma.character.findMany({
      include: {
        house: true
      }
    });
    res.json(characters);
  } catch (error) {
    console.error('Erro ao buscar personagens:', error);
    res.status(500).json({ error: 'Erro ao buscar personagens' });
  }
});

// GET /api/characters/:id - Buscar personagem por ID
router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const character = await prisma.character.findUnique({
      where: { id: parseInt(id) },
      include: {
        house: true
      }
    });
    
    if (!character) {
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }
    
    res.json(character);
  } catch (error) {
    console.error('Erro ao buscar personagem:', error);
    res.status(500).json({ error: 'Erro ao buscar personagem' });
  }
});

// POST /api/characters - Criar novo personagem
router.post('/', async (req: express.Request, res: express.Response) => {
  try {
    const character = await prisma.character.create({
      data: req.body,
      include: {
        house: true
      }
    });
    res.status(201).json(character);
  } catch (error) {
    console.error('Erro ao criar personagem:', error);
    res.status(500).json({ error: 'Erro ao criar personagem' });
  }
});

// GET /api/characters/house/:houseId - Buscar personagens por casa
router.get('/house/:houseId', async (req: express.Request, res: express.Response) => {
  try {
    const { houseId } = req.params;
    const characters = await prisma.character.findMany({
      where: { houseId: parseInt(houseId) },
      include: {
        house: true
      }
    });
    res.json(characters);
  } catch (error) {
    console.error('Erro ao buscar personagens da casa:', error);
    res.status(500).json({ error: 'Erro ao buscar personagens da casa' });
  }
});

export default router;

import { PrismaClient } from '@prisma/client';
import express from 'express';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/spells - Listar todos os feitiços
router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const spells = await prisma.spell.findMany();
    res.json(spells);
  } catch (error) {
    console.error('Erro ao buscar feitiços:', error);
    res.status(500).json({ error: 'Erro ao buscar feitiços' });
  }
});

// GET /api/spells/:id - Buscar feitiço por ID
router.get('/:id', async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const spell = await prisma.spell.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!spell) {
      return res.status(404).json({ error: 'Feitiço não encontrado' });
    }
    
    res.json(spell);
  } catch (error) {
    console.error('Erro ao buscar feitiço:', error);
    res.status(500).json({ error: 'Erro ao buscar feitiço' });
  }
});

// GET /api/spells/type/:type - Buscar feitiços por tipo
router.get('/type/:type', async (req: express.Request, res: express.Response) => {
  try {
    const { type } = req.params;
    const spells = await prisma.spell.findMany({
      where: { type }
    });
    res.json(spells);
  } catch (error) {
    console.error('Erro ao buscar feitiços por tipo:', error);
    res.status(500).json({ error: 'Erro ao buscar feitiços por tipo' });
  }
});

export default router;

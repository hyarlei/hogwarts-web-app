"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
// GET /api/characters - Listar todos os personagens
router.get('/', async (req, res) => {
    try {
        const characters = await prisma.character.findMany({
            include: {
                house: true
            }
        });
        res.json(characters);
    }
    catch (error) {
        console.error('Erro ao buscar personagens:', error);
        res.status(500).json({ error: 'Erro ao buscar personagens' });
    }
});
// GET /api/characters/:id - Buscar personagem por ID
router.get('/:id', async (req, res) => {
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
    }
    catch (error) {
        console.error('Erro ao buscar personagem:', error);
        res.status(500).json({ error: 'Erro ao buscar personagem' });
    }
});
// POST /api/characters - Criar novo personagem
router.post('/', async (req, res) => {
    try {
        const character = await prisma.character.create({
            data: req.body,
            include: {
                house: true
            }
        });
        res.status(201).json(character);
    }
    catch (error) {
        console.error('Erro ao criar personagem:', error);
        res.status(500).json({ error: 'Erro ao criar personagem' });
    }
});
// GET /api/characters/house/:houseId - Buscar personagens por casa
router.get('/house/:houseId', async (req, res) => {
    try {
        const { houseId } = req.params;
        const characters = await prisma.character.findMany({
            where: { houseId: parseInt(houseId) },
            include: {
                house: true
            }
        });
        res.json(characters);
    }
    catch (error) {
        console.error('Erro ao buscar personagens da casa:', error);
        res.status(500).json({ error: 'Erro ao buscar personagens da casa' });
    }
});
exports.default = router;
//# sourceMappingURL=characters.js.map
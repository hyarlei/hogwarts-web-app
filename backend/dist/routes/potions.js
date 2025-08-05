"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
// GET /api/potions - Listar todas as poções
router.get('/', async (req, res) => {
    try {
        const potions = await prisma.potion.findMany();
        res.json(potions);
    }
    catch (error) {
        console.error('Erro ao buscar poções:', error);
        res.status(500).json({ error: 'Erro ao buscar poções' });
    }
});
// GET /api/potions/:id - Buscar poção por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const potion = await prisma.potion.findUnique({
            where: { id: parseInt(id) }
        });
        if (!potion) {
            return res.status(404).json({ error: 'Poção não encontrada' });
        }
        res.json(potion);
    }
    catch (error) {
        console.error('Erro ao buscar poção:', error);
        res.status(500).json({ error: 'Erro ao buscar poção' });
    }
});
exports.default = router;
//# sourceMappingURL=potions.js.map
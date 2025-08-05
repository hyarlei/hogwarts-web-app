"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
// GET /api/spells - Listar todos os feitiços
router.get('/', async (req, res) => {
    try {
        const spells = await prisma.spell.findMany();
        res.json(spells);
    }
    catch (error) {
        console.error('Erro ao buscar feitiços:', error);
        res.status(500).json({ error: 'Erro ao buscar feitiços' });
    }
});
// GET /api/spells/:id - Buscar feitiço por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const spell = await prisma.spell.findUnique({
            where: { id: parseInt(id) }
        });
        if (!spell) {
            return res.status(404).json({ error: 'Feitiço não encontrado' });
        }
        res.json(spell);
    }
    catch (error) {
        console.error('Erro ao buscar feitiço:', error);
        res.status(500).json({ error: 'Erro ao buscar feitiço' });
    }
});
// GET /api/spells/type/:type - Buscar feitiços por tipo
router.get('/type/:type', async (req, res) => {
    try {
        const { type } = req.params;
        const spells = await prisma.spell.findMany({
            where: { type }
        });
        res.json(spells);
    }
    catch (error) {
        console.error('Erro ao buscar feitiços por tipo:', error);
        res.status(500).json({ error: 'Erro ao buscar feitiços por tipo' });
    }
});
exports.default = router;
//# sourceMappingURL=spells.js.map
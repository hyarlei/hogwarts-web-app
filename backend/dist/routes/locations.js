"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
// GET /api/locations - Listar todas as localizações
router.get('/', async (req, res) => {
    try {
        const locations = await prisma.location.findMany();
        res.json(locations);
    }
    catch (error) {
        console.error('Erro ao buscar localizações:', error);
        res.status(500).json({ error: 'Erro ao buscar localizações' });
    }
});
// GET /api/locations/:id - Buscar localização por ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const location = await prisma.location.findUnique({
            where: { id: parseInt(id) }
        });
        if (!location) {
            return res.status(404).json({ error: 'Localização não encontrada' });
        }
        res.json(location);
    }
    catch (error) {
        console.error('Erro ao buscar localização:', error);
        res.status(500).json({ error: 'Erro ao buscar localização' });
    }
});
exports.default = router;
//# sourceMappingURL=locations.js.map
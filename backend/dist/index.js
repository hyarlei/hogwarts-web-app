"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// Routes
const characters_1 = __importDefault(require("./routes/characters"));
const houses_1 = __importDefault(require("./routes/houses"));
const locations_1 = __importDefault(require("./routes/locations"));
const potions_1 = __importDefault(require("./routes/potions"));
const spells_1 = __importDefault(require("./routes/spells"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const prisma = new client_1.PrismaClient();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/houses', houses_1.default);
app.use('/api/characters', characters_1.default);
app.use('/api/spells', spells_1.default);
app.use('/api/potions', potions_1.default);
app.use('/api/locations', locations_1.default);
// Health check
app.get('/api', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Bem-vindo ao mundo mágico de Harry Potter!',
        timestamp: new Date().toISOString()
    });
});
// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado no mundo mágico!' });
});
async function main() {
    try {
        await prisma.$connect();
        console.log('🏰 Conectado ao banco de dados de Hogwarts!');
        app.listen(port, () => {
            console.log(`🧙‍♂️ Servidor rodando na porta ${port}`);
            console.log(`📖 Documentação da API: http://localhost:${port}/api`);
        });
    }
    catch (error) {
        console.error('❌ Erro ao conectar com o banco:', error);
        process.exit(1);
    }
}
// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('🏃‍♂️ Desconectando do banco...');
    await prisma.$disconnect();
    process.exit(0);
});
main().catch(console.error);
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🏰 Populando o banco de dados de Hogwarts...');
    // Criar as casas de Hogwarts
    const houses = [
        {
            name: 'Grifinória',
            founder: 'Godric Gryffindor',
            colors: 'Vermelho e Dourado',
            animal: 'Leão',
            element: 'Fogo',
            traits: 'Coragem, Bravura, Determinação, Cavalheirismo',
            points: 0
        },
        {
            name: 'Sonserina',
            founder: 'Salazar Slytherin',
            colors: 'Verde e Prata',
            animal: 'Serpente',
            element: 'Água',
            traits: 'Ambição, Astúcia, Liderança, Determinação',
            points: 0
        },
        {
            name: 'Corvinal',
            founder: 'Rowena Ravenclaw',
            colors: 'Azul e Bronze',
            animal: 'Águia',
            element: 'Ar',
            traits: 'Inteligência, Sabedoria, Criatividade, Erudição',
            points: 0
        },
        {
            name: 'Lufa-Lufa',
            founder: 'Helga Hufflepuff',
            colors: 'Amarelo e Preto',
            animal: 'Texugo',
            element: 'Terra',
            traits: 'Lealdade, Honestidade, Trabalho Duro, Paciência',
            points: 0
        }
    ];
    for (const house of houses) {
        await prisma.house.upsert({
            where: { name: house.name },
            update: {},
            create: house
        });
    }
    // Criar personagens principais
    const characters = [
        {
            name: 'Harry Potter',
            houseId: 1, // Grifinória
            bloodStatus: 'Half-blood',
            species: 'Human',
            occupation: 'Auror',
            patronus: 'Cervo',
            boggart: 'Dementador',
            wand: 'Azevinho, 11 polegadas, pena de fênix',
            isAlive: true,
            description: 'O menino que sobreviveu'
        },
        {
            name: 'Hermione Granger',
            houseId: 1, // Grifinória
            bloodStatus: 'Muggle-born',
            species: 'Human',
            occupation: 'Funcionária do Ministério da Magia',
            patronus: 'Lontra',
            boggart: 'Professor McGonagall dizendo que ela falhou',
            wand: 'Videira, 10¾ polegadas, corda de coração de dragão',
            isAlive: true,
            description: 'A bruxa mais inteligente de sua idade'
        },
        {
            name: 'Ron Weasley',
            houseId: 1, // Grifinória
            bloodStatus: 'Pure-blood',
            species: 'Human',
            occupation: 'Auror',
            patronus: 'Terrier Jack Russell',
            boggart: 'Aranha',
            wand: 'Salgueiro, 14 polegadas, crina de unicórnio',
            isAlive: true,
            description: 'Melhor amigo leal de Harry Potter'
        },
        {
            name: 'Draco Malfoy',
            houseId: 2, // Sonserina
            bloodStatus: 'Pure-blood',
            species: 'Human',
            occupation: 'Desconhecido',
            patronus: 'Desconhecido',
            boggart: 'Voldemort',
            wand: 'Espinheiro, 10 polegadas, crina de unicórnio',
            isAlive: true,
            description: 'Rival de Harry Potter em Hogwarts'
        },
        {
            name: 'Luna Lovegood',
            houseId: 3, // Corvinal
            bloodStatus: 'Pure-blood',
            species: 'Human',
            occupation: 'Naturalista Mágica',
            patronus: 'Lebre',
            boggart: 'Desconhecido',
            wand: 'Desconhecido',
            isAlive: true,
            description: 'Excêntrica e imaginativa'
        },
        {
            name: 'Cedric Diggory',
            houseId: 4, // Lufa-Lufa
            bloodStatus: 'Pure-blood',
            species: 'Human',
            occupation: 'Estudante (falecido)',
            patronus: 'Desconhecido',
            boggart: 'Desconhecido',
            wand: 'Freixo, 12¼ polegadas, crina de unicórnio',
            isAlive: false,
            description: 'Campeão de Hogwarts no Torneio Tribruxo'
        },
        {
            name: 'Severus Snape',
            houseId: 2, // Sonserina
            bloodStatus: 'Half-blood',
            species: 'Human',
            occupation: 'Professor de Poções (falecido)',
            patronus: 'Corça',
            boggart: 'Desconhecido',
            wand: 'Desconhecido',
            isAlive: false,
            description: 'Professor de Poções e mestre das Artes das Trevas'
        },
        {
            name: 'Albus Dumbledore',
            houseId: 1, // Grifinória
            bloodStatus: 'Half-blood',
            species: 'Human',
            occupation: 'Diretor de Hogwarts (falecido)',
            patronus: 'Fênix',
            boggart: 'Corpo de sua irmã Ariana',
            wand: 'Sabugueiro, 15 polegadas, corda de rabo de tesálio',
            isAlive: false,
            description: 'O maior bruxo de todos os tempos'
        }
    ];
    for (const character of characters) {
        await prisma.character.create({
            data: character
        });
    }
    // Criar feitiços famosos
    const spells = [
        {
            name: 'Expelliarmus',
            incantation: 'Expelliarmus',
            type: 'Charm',
            effect: 'Desarma o oponente',
            difficulty: 'Beginner',
            description: 'Feitiço de desarme, força o oponente a soltar sua varinha'
        },
        {
            name: 'Expecto Patronum',
            incantation: 'Expecto Patronum',
            type: 'Charm',
            effect: 'Invoca um Patrono',
            difficulty: 'Advanced',
            description: 'Invoca um Patrono para repelir Dementadores'
        },
        {
            name: 'Avada Kedavra',
            incantation: 'Avada Kedavra',
            type: 'Curse',
            effect: 'Mata instantaneamente',
            difficulty: 'Expert',
            description: 'Maldição da Morte, uma das três Maldições Imperdoáveis'
        },
        {
            name: 'Wingardium Leviosa',
            incantation: 'Wingardium Leviosa',
            type: 'Charm',
            effect: 'Levita objetos',
            difficulty: 'Beginner',
            description: 'Feitiço de levitação para fazer objetos flutuarem'
        },
        {
            name: 'Lumos',
            incantation: 'Lumos',
            type: 'Charm',
            effect: 'Cria luz na ponta da varinha',
            difficulty: 'Beginner',
            description: 'Feitiço que ilumina a ponta da varinha'
        },
        {
            name: 'Alohomora',
            incantation: 'Alohomora',
            type: 'Charm',
            effect: 'Abre fechaduras',
            difficulty: 'Intermediate',
            description: 'Feitiço para abrir portas e fechaduras simples'
        },
        {
            name: 'Stupefy',
            incantation: 'Stupefy',
            type: 'Spell',
            effect: 'Atordoa o alvo',
            difficulty: 'Intermediate',
            description: 'Feitiço de atordoamento que deixa o alvo inconsciente'
        }
    ];
    for (const spell of spells) {
        await prisma.spell.upsert({
            where: { name: spell.name },
            update: {},
            create: spell
        });
    }
    // Criar poções famosas
    const potions = [
        {
            name: 'Poção Polissuco',
            effect: 'Transforma uma pessoa em outra',
            difficulty: 'Expert',
            ingredients: JSON.stringify([
                'Lacewing flies (stewed for 21 days)',
                'Leeches',
                'Powdered horn of bicorn',
                'Knotgrass',
                'Fluxweed (picked during full moon)',
                'Shredded skin of boomslang',
                'Hair of the person to be impersonated'
            ]),
            brewing: 'Extremely complex, takes a month to brew',
            description: 'Permite que o usuário assuma a aparência física de outra pessoa'
        },
        {
            name: 'Poção do Amor',
            effect: 'Cria obsessão amorosa temporária',
            difficulty: 'Intermediate',
            ingredients: JSON.stringify([
                'Ashwinder eggs',
                'Rose thorns',
                'Peppermint',
                'Moonstone'
            ]),
            brewing: 'Deve ser preparada em lua cheia',
            description: 'Cria uma obsessão temporária, não amor verdadeiro'
        },
        {
            name: 'Poção da Sorte',
            effect: 'Aumenta a sorte temporariamente',
            difficulty: 'Expert',
            ingredients: JSON.stringify([
                'Ashwinder egg',
                'Squill bulb',
                'Murtlap tentacle',
                'Tincture of thyme',
                'Occamy eggshell',
                'Powdered common rue'
            ]),
            brewing: 'Demora seis meses para ser preparada',
            description: 'Também conhecida como Liquid Luck, traz boa sorte por um período limitado'
        },
        {
            name: 'Veritaserum',
            effect: 'Força a dizer a verdade',
            difficulty: 'Expert',
            ingredients: JSON.stringify([
                'Jobberknoll feathers',
                'Hellebore essence',
                'Honeywater'
            ]),
            brewing: 'Lunar month to mature',
            description: 'Soro da verdade mais poderoso, força a pessoa a falar apenas a verdade'
        }
    ];
    for (const potion of potions) {
        await prisma.potion.upsert({
            where: { name: potion.name },
            update: {},
            create: potion
        });
    }
    // Criar localizações famosas
    const locations = [
        {
            name: 'Hogwarts',
            type: 'School',
            description: 'Escola de Magia e Bruxaria de Hogwarts, localizada na Escócia'
        },
        {
            name: 'Beco Diagonal',
            type: 'Shopping District',
            description: 'Rua comercial mágica escondida em Londres'
        },
        {
            name: 'Ministério da Magia',
            type: 'Government',
            description: 'Sede do governo do mundo mágico britânico'
        },
        {
            name: 'Azkaban',
            type: 'Prison',
            description: 'Prisão de bruxos guardada por Dementadores'
        },
        {
            name: 'Floresta Proibida',
            type: 'Forest',
            description: 'Floresta perigosa nos terrenos de Hogwarts'
        },
        {
            name: 'Plataforma 9¾',
            type: 'Station',
            description: 'Plataforma mágica na estação Kings Cross para o Expresso de Hogwarts'
        }
    ];
    for (const location of locations) {
        await prisma.location.upsert({
            where: { name: location.name },
            update: {},
            create: location
        });
    }
    console.log('✨ Banco de dados populado com sucesso!');
    console.log('🏠 4 casas de Hogwarts criadas');
    console.log('👥 8 personagens adicionados');
    console.log('⚡ 7 feitiços registrados');
    console.log('🧪 4 poções catalogadas');
    console.log('📍 6 localizações mapeadas');
}
main()
    .catch((e) => {
    console.error('❌ Erro ao popular banco:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
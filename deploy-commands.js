
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import dotenv from 'dotenv';


dotenv.config();

const commands = [
  {
    name: 'ping',
    description: 'Responde com "Pong!"',
  },
  {
    name: 'server',
    description: 'Responde com informações do servidor.',
  },
  {
    name: 'roll',
    description: 'Rola um dado de X lados.',
    options: [
      {
        name: 'sides',
        description: 'Número de lados do dado.',
        type: 4,
        required: true,
      },
    ],
  },
  {
    name: 'countries',
    description: 'Lista todos os países do mundo.',
    options: [
      {
        name: 'search',
        description: 'Busca por um país específico.',
        type: 3,
        required: false,
      },
    ],
  }
];

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

rest.put(Routes.applicationCommands(process.env.DISCORD_BOT_ID), { body: commands })
  .then(() => console.log('Comandos de barra registrados!'))
  .catch(console.error);

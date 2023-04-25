

import {Client, Intents} from 'discord.js';
import baseCommands from './interactions/baseCommands.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('interactionCreate', interaction => {
  baseCommands(interaction);
});

client.login(process.env.DISCORD_BOT_TOKEN);
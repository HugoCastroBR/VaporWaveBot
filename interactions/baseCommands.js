
// Base Commands
const ping = (interaction) => {
  interaction.reply('Pong!');
}

const server = (interaction) => {
  interaction.reply(`Nome do servidor: ${interaction.guild.name}\nTotal de membros: ${interaction.guild.memberCount}`);
}

const rollADice = (interaction) => {
  const sides = interaction.options.getInteger('sides');
  const result = Math.floor(Math.random() * sides) + 1;
  interaction.reply(`Rolando um dado de ${sides} lados... Resultado: ${result}`);
}

// Other Commands
import ibge from './ibge.js';

//

const baseCommands = (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    return ping(interaction);
  }

  if (interaction.commandName === 'server') {
    return server(interaction);
  }

  if (interaction.commandName === 'roll') {
    return rollADice(interaction);
  }

  if (interaction.commandName === 'countries') {
    return ibge.getAllCountries(interaction);
  }

}

export default baseCommands;
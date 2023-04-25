import fetch from 'node-fetch'

const ibgeAPI = "https://servicodados.ibge.gov.br/api/v1/localidades"

const getAllCountries = async (interaction) => {
    try {
      const response = await fetch(`${ibgeAPI}/paises`)
      const data = await response.json()
      const countries = data.map(country => country.nome)
      interaction.reply(`Lista de países: ${countries.join(', ')}`)
    } catch (error) {
      interaction.reply('Ocorreu um erro ao buscar a lista de países.')
    }
}

export default {
    getAllCountries
}
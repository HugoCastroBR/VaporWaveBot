import fetch from 'node-fetch'
import shorten from '../utils/shorten.js'
const countriesAPI = "https://restcountries.com/v3.1"

const getAllCountries = async (interaction) => {
    try {
      if(interaction?.options?.getString('search')) {
        const search = interaction.options.getString('search')
        const response = await fetch(countriesAPI + '/all')
        const data = await response.json()

        let countriesName = data.map(country => country.name.common)
        countriesName = countriesName.filter(country => country.toLowerCase().includes(search.toLowerCase()))

        if(countriesName.length === 0) {
          interaction.reply(`Não foi possível encontrar nenhum país com o termo "${search}".`)
          return
        }
        else if(countriesName.length === 1) {
          const countryName = countriesName[0]
          const aboutTheCountry = await fetch(`${countriesAPI}/name/${countryName}`)
          const aboutTheCountryData = await aboutTheCountry.json()
          console.log(aboutTheCountryData)
          interaction.reply(`Foi encontrado 1 país com o termo "${search}": ${countriesName[0]}, ${aboutTheCountryData[0].name.official}
            \n
            Capital: ${aboutTheCountryData[0].capital[0]}
            \n
            Região: ${aboutTheCountryData[0].region}
            \n
            Sub-região: ${aboutTheCountryData[0].subregion}
            \n
            População: ${aboutTheCountryData[0].population}
            \n
            Área: ${aboutTheCountryData[0].area} km²
            \n
            Línguas: ${Object.values(aboutTheCountryData[0].languages).join(', ')}
            \n
            Domínios de internet: ${Object.values(aboutTheCountryData[0].tld).join(', ')}
            \n
          
          `)
          return
        }
        else{
          interaction.reply(`Lista de países: ${shorten(countriesName.join(',\n '),1900)} `)
        }
        
      }else{
        const response = await fetch(countriesAPI + '/all')
        const data = await response.json()
        let countriesName = data.map(country => country.name.common)
        interaction.reply(`Lista de países: ${shorten(countriesName.join(',\n '),1900)} `)
      }
    } catch (error) {
      interaction.reply('Ocorreu um erro ao buscar a lista de países.')
    }
}

export default {
    getAllCountries
}
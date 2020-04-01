
const weatherTypes  = require('./data/weatherTypes.json')
const windSpeed = require('./data/windSpeed.json')


function ForecastDecorator (forecast){
  this.forecast = forecast

  function getDate(){
      if (!forecast)
          return

      const d = new Date(forecast.dataPrev)
      const dtf = new Intl.DateTimeFormat('pt',
       { year: 'numeric',
          month: 'long',
          day: '2-digit',
          weekday: 'long' })

      const [{value: weekday},,{ value: da },,{ value: mo }] = dtf.formatToParts(d)

      return `${weekday},  ${da} ${mo}`
    }

  function getWindSpeed(){
      if (forecast && windSpeed[forecast.idFfxVento] )
          return  windSpeed[forecast.idFfxVento].descClassWindSpeedDailyPT

  }

  function getWindDirection(){
      if (forecast && forecast.ddVento )
          return  forecast.ddVento


  }


  function getWeatherType(){
      if (forecast && weatherTypes[forecast.idTipoTempo] )
          return weatherTypes[forecast.idTipoTempo].descIdWeatherTypePT
  }

  function getWeatherShort(){
      if (! forecast)
          return

      return this.weather(forecast)  // +  ' Temperatura: ' +Math.round(forecast.tMin) + '/' +  Math.round(forecast.tMax) + ' '   + 'Vento: ' +this.wind(forecast) + '(' + forecast.windDir(ff)+ ')'
  }

}



module.exports =  {
  getForecastDecorator(forecast) {return new ForecastDecorator(forecast)}
}

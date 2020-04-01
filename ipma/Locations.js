/* Version 1.0 */

const data = require('./Data')

//export const weatherService = WeatherApi()
module.exports = {
  getService() {
  return {

       getLocations (){
        //console.log("hello")
        return data.getDistricts()
      },

       getLocation(id){
        return  data.getLocationsMap() ?  data.getLocationsMap()[id] : null
      },

      //all districts
       getDistricts () {
        return data.getDistricts()
      },

      getDistrictsZone1 () {
        return  data.getDistrictsPerZone() ? data.getDistrictsPerZone() ['zone1'] : null
      },

      getDistrictsZone2 () {
        return  data.getDistrictsPerZone() ? data.getDistrictsPerZone() ['zone2'] : null
      },
      getDistrictsZone3 () {
        return  data.getDistrictsPerZone() ? data.getDistrictsPerZone() ['zone3'] : null
      },

       getLocationsPerDistrict(id){
        return data.getLocationsPerDistrict() ?  data.getLocationsPerDistrict()[id] : null
      }}
  }
}

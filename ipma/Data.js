/* Version 1.0.0 */

const districts = require('./data/districts.json')
const districtsPerZone = require('./data/districtsPerZone.json')
const locationsMap = require('./data/locationsMap.json')
const locationsPerDistrict = require('./data/locationsPerDistrict.json')
const locationsIdPerDistrict = require('./data/locationsIdPerDistrict.json')


const getDistricts = () => districts
const getDistrictsPerZone = () => districtsPerZone
const getLocationsMap = () => locationsMap
const getLocationsPerDistrict = () => locationsPerDistrict
const getLocationsIdPerDistrict = () => locationsIdPerDistrict

module.exports =  {
    getDistricts,
    getDistrictsPerZone,
    getLocationsMap,
    getLocationsPerDistrict,
    getLocationsIdPerDistrict
}

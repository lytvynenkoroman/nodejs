'use strict';
const fs = require('fs');
const Papa = require('papaparse');
const async = require('async');
const Address = require('./models/address');

const FILE_PATH = 'media/addressVerified.csv';

async function process() {

    try {

        await processCSV(FILE_PATH);

    } catch(e) {

        console.log(e);

        return false;
    }

}

/**
 * @param {string} filePath
 */
async function  processCSV(filePath) {
    const csvFile = fs.readFileSync(filePath);
    const csvData = csvFile.toString();
    return new Promise(function (resolve, reject) {
        Papa.parse(csvData, {
            header: true,
            chunkSize: 10000,
            chunk: async function(data,parser) {
                parser.pause();
                data = data.data;
                if(data.length) {
                    await processChunk(data);
                }
                parser.resume();
            },
            complete: function(results) {
                resolve(true);
            }
        });
    });
}

async function getAddresses(addresses) {

    let result = [];

    addresses.map(function(address) {
       result.push({
            _id: address._id,
            recipient: address.recipient,
            primary_line: address.primary_line,
            secondary_line: address.secondary_line,
            urbanization: address.urbanization,
            last_line: address.last_line,
            deliverability: address.deliverability,
            primary_number: address.primary_number,
            street_predirection: address.street_predirection,
            street_name: address.street_name,
            street_suffix: address.street_suffix,
            secondary_designator: address.secondary_designator,
            secondary_number: address.secondary_number,
            pmb_designator: address.pmb_designator,
            pmb_number: address.pmb_number,
            extra_secondary_designator: address.extra_secondary_designator,
            extra_secondary_number: address.extra_secondary_number,
            city: address.city,
            zip_code: address.zip_code,
            zip_code_plus_4: address.zip_code_plus_4,
            zip_code_type: address.zip_code_type,
            delivery_point_barcode: address.delivery_point_barcode,
            address_type: address.address_type,
            record_type: address.record_type,
            default_building_address: address.default_building_address,
            county: address.county,
            county_fips: address.county_fips,
            carrier_route: address.carrier_route,
            carrier_route_type: address.carrier_route_type,
            latitude: address.latitude,
            longitude: address.longitude,
            dpv_confirmation: address.dpv_confirmation,
            dpv_cmra: address.dpv_cmra,
            dpv_vacant: address.dpv_vacant,
            dpv_footnotes: address.dpv_footnotes,
            lacs_indicator: address.lacs_indicator,
            lacs_return_code: address.lacs_return_code,
            suite_return_code: address.suite_return_code
        })
    });

    return result;
}

async function processChunk(addresses) {
    let values = await getAddresses(addresses);
    await Address.bulkCreate(values, {returning: true});
}

exports.process = process;
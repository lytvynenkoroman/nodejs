'use strict'
const fs = require('fs');
const parse = require('csv-parse');
const async = require('async');
const Address = require('./models/address');

let inputFilePath = 'media/addressVerified.csv'
let parser = parse({delimiter: ','}, function (err, data) {
    function addAddress(line) {
        const address = Address.create({
            _id: line[1],
            recipient: line[2],
            primary_line: line[3],
            secondary_line: line[4],
            urbanization: line[5],
            last_line: line[6],
            deliverability: line[7],
            primary_number: line[8],
            street_predirection: line[9],
            street_name: line[10],
            street_suffix: line[11],
            secondary_designator: line[12],
            secondary_number: line[13],
            pmb_designator: line[14],
            pmb_number: line[15],
            extra_secondary_designator: line[16],
            extra_secondary_number: line[17],
            city: line[18],
            zip_code: line[19],
            zip_code_plus_4: line[20],
            zip_code_type: line[21],
            delivery_point_barcode: line[22],
            address_type: line[23],
            record_type: line[24],
            default_building_address: line[25],
            county: line[26],
            county_fips: line[27],
            carrier_route: line[28],
            carrier_route_type: line[29],
            latitude: line[30],
            longitude: line[31],
            dpv_confirmation: line[32],
            dpv_cmra: line[33],
            dpv_vacant: line[34],
            dpv_footnotes: line[35],
            lacs_indicator: line[36],
            lacs_return_code: line[37],
            suite_return_code: line[38]
        });

    }

    async.eachSeries(data, function (line, callback) {
        // do something with the line
        if (line[1] !== '_id') {
            addAddress(line);
        }
        callback();

    })
});
fs.createReadStream(inputFilePath).pipe(parser);

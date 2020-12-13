'use strict';
// Include Sequelize module.
const Sequelize = require('sequelize');

// Import sequelize object,
// Database connection pool managed by Sequelize.
const sequelize = require('../utils/database');

// Define method takes two arrguments
// 1st - name of table
// 2nd - columns inside the table
const Address = sequelize.define('address', {

    // Column-1, id is an object with
    // properties like type, keys,
    // validation of column.
    id:{

        // Sequelize module has INTEGER Data_Type.
        type:Sequelize.INTEGER,

        // To increment user_id automatically.
        autoIncrement:true,

        // user_id can not be null.
        allowNull:false,

        // For uniquely identify user.
        primaryKey:true
    },

    // Column-2, _id
    _id: { type: Sequelize.STRING, allowNull:true },
    // Column-3, recipient
    recipient: { type: Sequelize.STRING, allowNull:true },
    // Column-4, primary_line
    primary_line: { type: Sequelize.STRING, allowNull:true },
    // Column-5, secondary_line
    secondary_line: { type: Sequelize.STRING, allowNull:true },
    // Column-6, urbanization
    urbanization: { type: Sequelize.STRING, allowNull:true },
    // Column-7, last_line
    last_line: { type: Sequelize.STRING, allowNull:true },
    // Column-8, deliverability
    deliverability: { type: Sequelize.STRING, allowNull:true },
    // Column-9, primary_number
    primary_number: { type: Sequelize.STRING, allowNull:true },
    // Column-10, street_predirection
    street_predirection: { type: Sequelize.STRING, allowNull:true },
    // Column-11, street_name
    street_name: { type: Sequelize.STRING, allowNull:true },
    // Column-12, street_suffix
    street_suffix: { type: Sequelize.STRING, allowNull:true },
    // Column-13, secondary_designator
    secondary_designator: { type: Sequelize.STRING, allowNull:true },
    // Column-14, secondary_number
    secondary_number: { type: Sequelize.STRING, allowNull:true },
    // Column-15, pmb_designator
    pmb_designator: { type: Sequelize.STRING, allowNull:true },
    // Column-16, pmb_number
    pmb_number: { type: Sequelize.STRING, allowNull:true },
    // Column-17, extra_secondary_designator
    extra_secondary_designator: { type: Sequelize.STRING, allowNull:true },
    // Column-18, extra_secondary_number
    extra_secondary_number: { type: Sequelize.STRING, allowNull:true },
    // Column-19, city
    city: { type: Sequelize.STRING, allowNull:true },
    // Column-20, zip_code
    zip_code: { type: Sequelize.STRING, allowNull:true },
    // Column-21, zip_code_plus_4
    zip_code_plus_4: { type: Sequelize.STRING, allowNull:true },
    // Column-22, zip_code_type
    zip_code_type: { type: Sequelize.STRING, allowNull:true },
    // Column-23, delivery_point_barcode
    delivery_point_barcode: { type: Sequelize.STRING, allowNull:true },
    // Column-24, address_type
    address_type: { type: Sequelize.STRING, allowNull:true },
    // Column-25, record_type
    record_type: { type: Sequelize.STRING, allowNull:true },
    // Column-26, default_building_address
    default_building_address: { type: Sequelize.STRING, allowNull:true },
    // Column-27, county
    county: { type: Sequelize.STRING, allowNull:true },
    // Column-28, county_fips
    county_fips: { type: Sequelize.STRING, allowNull:true },
    // Column-29, carrier_route
    carrier_route: { type: Sequelize.STRING, allowNull:true },
    // Column-30, carrier_route_type
    carrier_route_type: { type: Sequelize.STRING, allowNull:true },
    // Column-31, latitude
    latitude: { type: Sequelize.STRING, allowNull:true },
    // Column-32, longitude
    longitude: { type: Sequelize.STRING, allowNull:true },
    // Column-33, dpv_confirmation
    dpv_confirmation: { type: Sequelize.STRING, allowNull:true },
    // Column-34, dpv_cmra
    dpv_cmra: { type: Sequelize.STRING, allowNull:true },
    // Column-35, dpv_vacant
    dpv_vacant: { type: Sequelize.STRING, allowNull:true },
    // Column-36, dpv_footnotes
    dpv_footnotes: { type: Sequelize.STRING, allowNull:true },
    // Column-37, lacs_indicator
    lacs_indicator: { type: Sequelize.STRING, allowNull:true },
    // Column-38, lacs_return_code
    lacs_return_code: { type: Sequelize.STRING, allowNull:true },
    // Column-39, suite_return_code
    suite_return_code: { type: Sequelize.STRING, allowNull:true },
});

// Exporting Address, using this constant
// we can perform CRUD operations on
// 'address' table.
module.exports = Address;
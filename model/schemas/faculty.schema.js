/** packages */
const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator");

/** Schema creation */
const facultySchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    decano:{
        type: "String",
        required: true,
        unique: true
    }
});

facultySchema.plugin(validator)
module.exports = facultySchema;
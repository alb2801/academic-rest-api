/** packages */
const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator");

/** Schema creation */
const programSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    },
    nameDirec:{
        type: "String",
        required: true,
        unique: true
    },
    idFacul: {
        type: "String",
        required: true
    }
});

programSchema.plugin(validator)
module.exports = programSchema;
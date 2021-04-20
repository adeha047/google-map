const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ParksSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    local: [
        {
            distance: {
                type: Number
            }
        }
    ]
});



const Parks = mongoose.model("Parks", ParksSchema);

module.exports = Parks;
//We will have a list of the disasters in the disaster info page. Each combo of unique(Disaster type, Town+City) will have its seperate document in the page.
const mongoose= require("mongoose");

const DisasterSchema= new mongoose.Schema({
    Location:{
        Latitude: String,
        Longitude: String
    },
    Town: String,
    City: String,
    State: String,
    Disaster_Type: String,  //This will be chosen by the admin
    Description: [String],
    Name: [String],
    Status: Boolean  //If true, the disaster has not been subdued. If false, the disaster has been subdued
});


module.exports= DisasterSchema;


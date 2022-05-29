const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");

const ResponseSchema = new Schema({
  team_name: String,
  credited_status:Boolean,
  person_name1: String,
  person_email1: String,
  person_grade1: String,
  person_gender1: String,
  person_school1: String,
  person_contact1: String,
  person_discord1: String,
  person_name2: String,
  person_email2: String,
  person_grade2: String,
  person_gender2: String,
  person_school2: String,
  person_contact2: String,
  person_discord2: String,
  person_name3: String,
  person_email3: String,
  person_grade3: String,
  person_gender3: String,
  person_school3: String,
  person_contact3: String,
  person_discord3: String,
  person_name4: String,
  person_email4: String,
  person_grade4: String,
  person_gender4: String,
  person_school4: String,
  person_contact4: String,
  person_discord4: String
});

const ResponseModelSchema = mongoose.model("Response", ResponseSchema);

module.exports = ResponseModelSchema;

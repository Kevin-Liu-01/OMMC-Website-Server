const ResponseModelSchema = require("../Schemas/user.schema");

/* Create */
ResponseModelSchema.Create = async function (req, res) {
  console.log("Function Create called");

  const myObj = new ResponseModelSchema({
    team_name: req.body.team_name,
    credited_status: req.body.credited_status,
    person_name1: req.body.person_name1,
    person_email1: req.body.person_email1,
    person_gender1: req.body.person_gender1,
    person_school1: req.body.person_school1,
    person_contact1: req.body.person_contact1,
    person_discord1: req.body.person_discord1,

    person_name2: req.body.person_name2,
    person_email2: req.body.person_email2,
    person_gender2: req.body.person_gender2,
    person_school2: req.body.person_school2,
    person_contact2: req.body.person_contact2,
    person_discord2: req.body.person_discord2,

    person_name3: req.body.person_name3,
    person_email3: req.body.person_email3,
    person_gender3: req.body.person_gender3,
    person_school3: req.body.person_school3,
    person_contact3: req.body.person_contact3,
    person_discord3: req.body.person_discord3,

    person_name4: req.body.person_name4,
    person_email4: req.body.person_email4,
    person_gender4: req.body.person_gender4,
    person_school4: req.body.person_school4,
    person_contact4: req.body.person_contact4,
    person_discord4: req.body.person_discord4,

  });

  try {
    let result = await myObj.save();

    console.log(myObj);
    return res.json(result);
  } catch (err) {
    return res.json(error);
  }
};

ResponseModelSchema.ViewAll = function (req, res) {
  console.log("View all called");

  ResponseModelSchema.find({})
    .exec()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};

ResponseModelSchema.ReturnTeam = (req, res) => {
  console.log("Returning team");
  ResponseModelSchema.findOne({
    team_name: req.body.team_name,
    credited_status: req.body.credited_status,
    person_name1: req.body.person_name1,
    person_email1: req.body.person_email1,
    person_gender1: req.body.person_gender1,
    person_school1: req.body.person_school1,
    person_contact1: req.body.person_contact1,
    person_discord1: req.body.person_discord1,

    person_name2: req.body.person_name2,
    person_email2: req.body.person_email2,
    person_gender2: req.body.person_gender2,
    person_school2: req.body.person_school2,
    person_contact2: req.body.person_contact2,
    person_discord2: req.body.person_discord2,

    person_name3: req.body.person_name3,
    person_email3: req.body.person_email3,
    person_gender3: req.body.person_gender3,
    person_school3: req.body.person_school3,
    person_contact3: req.body.person_contact3,
    person_discord3: req.body.person_discord3,

    person_name4: req.body.person_name4,
    person_email4: req.body.person_email4,
    person_gender4: req.body.person_gender4,
    person_school4: req.body.person_school4,
    person_contact4: req.body.person_contact4,
    person_discord4: req.body.person_discord4,
  })
    .then((result) => {
      console.log(
        "REQ PARAMS: " + req.body.person_username,
        req.body.person_password,
        req.body.person_email
      );
      if (Boolean(result)) {
        return console.log(res.json(result));
      } else {
        console.log(res.json({ error: "User not found" }));
        return "User not found";
      }
    })
    .catch((error) => {
      return res.json(error);
    });
};

ResponseModelSchema.DeleteUser = (req, res) => {
  console.log("Document deleting: " + req.params.id);
  return ResponseModelSchema.findByIdAndRemove(req.params.id)
    .exec()
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.json(error);
    });
};

module.exports = ResponseModelSchema;

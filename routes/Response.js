const express = require("express");

var ResponseModelSchema = require("../Models/Reponse.model");

// questionRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const userRoutes = express.Router();

// This section will help you create a new team.
userRoutes.route("Response/create").post(ResponseModelSchema.Create);

// This section will help you find a specific team.
userRoutes.route("Response/findTeam").get(ResponseModelSchema.ReturnTeam);

// This section will help you get a list of all the teams.
userRoutes.route("Response/allTeams").get(ResponseModelSchema.ViewAll);


module.exports = userRoutes;

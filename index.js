const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
const port = 3000;

//--------------------------------------------------------------------------------------

const database = require("./src/config/database");
const route = require("./src/routes");

//--------------------------------------------------------------------------------------

database.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route(app);

//--------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

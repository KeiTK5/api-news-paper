const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const indexRouter = require("./routes/site")
var cors = require("cors");
require("dotenv").config();
const port = 8000;

//--------------------------------------------------------------------------------------

const database = require("./config/database");
const route = require("./routes");

//--------------------------------------------------------------------------------------

database.connect();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
route(app);
app.use("/", indexRouter);

//--------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

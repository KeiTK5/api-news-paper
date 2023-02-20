// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// var cors = require("cors");
// require("dotenv").config();
// const port = 8000;

// //--------------------------------------------------------------------------------------

// const database = require("./config/database");
// const route = require("./routes");

// //--------------------------------------------------------------------------------------

// database.connect();

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// route(app);

// //--------------------------------------------------------------------------------------

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
const express = require("express");
const router = express.Router();

//--------------------------------------------------------------------------------------

const newsController = require("../controllers/newsControllers");

//--------------------------------------------------------------------------------------
router.use("/:slug", newsController.detail);
router.post("/", newsController.create);
router.use("/", newsController.index);

//--------------------------------------------------------------------------------------
module.exports = router;

const express = require("express");
const router = express.Router();

//--------------------------------------------------------------------------------------

const newsController = require("../controllers/newsControllers");

//--------------------------------------------------------------------------------------
router.delete("/:id", newsController.delete);
router.get("/:slug", newsController.detail);
router.post("/", newsController.create);
router.get("/", newsController.index);

//--------------------------------------------------------------------------------------
module.exports = router;

const newsRouter = require("./news");
const indexRouter = require("./site");

//--------------------------------------------------------------------------------------

const router = (app) => {
    
    // page news
    app.use("/news", newsRouter);

    // page index
    app.use("/", indexRouter);
};

//--------------------------------------------------------------------------------------
module.exports = router;

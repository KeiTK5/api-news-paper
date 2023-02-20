const newsRouter = require("./news");
const indexRouter = require("./site");

//--------------------------------------------------------------------------------------

const router = (app) => {
    
    // page news
    app.get("/news", newsRouter);

    // page index
    app.get("/", indexRouter);
};

//--------------------------------------------------------------------------------------
module.exports = router;

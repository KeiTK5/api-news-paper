const News = require("../models/newsModel");

const NewsController = {
    index(req, res) {
        News.find({}, (err, news) => {
            if (!err) {
                res.json(news);
            } else {
                res.status(400).json({ error: "error" });
            }
        });
    },

    detail(req, res) {
        res.send(`detail ${req.params.slug}`);
    },

    create(req, res) {
        const data = req.body;
        News.insertMany(data, (req, res) => {
            try {
                console.log("success");
            } catch (error) {
                console.log("err");
            }
        });
    },
};

//--------------------------------------------------------------------------------------
module.exports = NewsController;

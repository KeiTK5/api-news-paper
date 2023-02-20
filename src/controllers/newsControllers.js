const News = require("../models/newsModel");

class NewsController  {
    index(req, res) {
        News.find({}, (err, news) => {
            try {
                res.json(news);
            } catch (error) {
                res.status(400).json({ error: "error" });
            }
        });
    }

    detail(req, res) {
        res.send(`detail ${req.params.slug}`);
    }

    create(req, res) {
        const data = req.body;
        News.insertMany(data, (req, res) => {
            try {
                console.log("success" + data);
            } catch (error) {
                console.log("err");
            }
        });
    }
    delete(req, res) {
        const data = req.params.id;
        console.log(data);
        News.deleteOne({ _id: data }, (req, res) => {
            try {
                console.log("success");
            } catch (error) {
                console.log("err");
            }
        });
    }
};

//--------------------------------------------------------------------------------------
module.exports = new NewsController;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const New = new Schema({
    title: String,
    author: String,
    tag: Array,
    description: String,
    image: String,
    views: Number,
    comments: Array,
    category: Array,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("New", New); //"New" tự động convert thành bảng "news" trong db, viết thường và thêm "s"

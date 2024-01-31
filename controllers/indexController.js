const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");

// GET index page
exports.getIndexPage = asyncHandler(async (req, res, next) => {
  const messages = await Message.find().populate("author");

  res.render("index", { title: "Cryptic Club", messages });
});

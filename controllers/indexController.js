const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");

// GET index page
exports.getIndexPage = asyncHandler(async (req, res, next) => {
  const messages = await Message.find().populate("author");

  res.render("index", { title: "Cryptic Club", messages });
});

// POST create message
exports.createMessage = asyncHandler(async (req, res, next) => {
  const { title, text } = req.body;
  const author = req.user._id;
  const newMessage = await Message.create({ title, text, author });
  res.redirect("/");
});

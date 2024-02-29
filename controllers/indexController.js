const asyncHandler = require("express-async-handler");
const Message = require("../models/Message");
const utils = require("../utils/utils");

// GET index page
exports.getIndexPage = asyncHandler(async (req, res, next) => {
  const messages = await Message.find().populate("author");

  // Calculate "time ago" for each message
  messages.forEach((message) => {
    message.timeAgo = utils.calculateTimeAgo(message.timestamp);
  });

  console.log(req.user)

  res.render("index", { title: "Cryptic Club", messages });
});

// POST create message
exports.createMessage = asyncHandler(async (req, res, next) => {
  const { title, text } = req.body;
  const author = req.user._id;
  const newMessage = await Message.create({ title, text, author });
  res.redirect("/");
});

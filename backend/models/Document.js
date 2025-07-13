const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  _id: String,
  content: Object,
  title: {
    type: String,
    default: "Untitled Document"
  }
});

module.exports = mongoose.model("Document", DocumentSchema);

const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: { type: String },
  is_completed: { type: Boolean },
});
module.exports = mongoose.model("Taskdata", taskSchema);

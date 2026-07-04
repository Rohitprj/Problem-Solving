const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Notes = mongoose.model("Notes", notesSchema);
module.exports = Notes;

// module.exports = mongoose.model("Notes", notesSchema);

const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    job: {
      type: String,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Jobs", jobsSchema);

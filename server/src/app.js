const express = require("express");
const morgan = require("morgan");
const pkg = require("../package.json");
const cors = require("cors");
const { createRoles } = require("./libs/initialSetup");

const app = express();
createRoles();

const env = require("node-env-file"); // .env file
env(__dirname + "/.env");

const authRoutes = require("./routes/auth.routes");
const jobsRoutes = require("./routes/jobs.routes");

// Settings
app.set("port", process.env.PORT || 4000);
app.set("pkg", pkg);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Info
app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobsRoutes);

module.exports = app;

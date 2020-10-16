const express = require("express");
const router = express.Router();
const authJwt = require("../middlewares/authJwt");
const jobsCtrl = require("../controllers/job.controller");

//Create a Job
router.post("/", [authJwt.verifyToken, authJwt.isAdmin], jobsCtrl.createJob);

//Show Jobs
router.get("/", [authJwt.verifyToken, authJwt.isUser], jobsCtrl.showJobs);

//Get a Job
router.get(
  "/:jobId",
  [authJwt.verifyToken, authJwt.isUser],
  jobsCtrl.getJobById
);

//Update a Job
router.put(
  "/:jobId",
  [authJwt.verifyToken, authJwt.isAdmin],
  jobsCtrl.updateJobById
);

//Delete a Job
router.delete(
  "/:jobId",
  [authJwt.verifyToken, authJwt.isAdmin],
  jobsCtrl.deleteJobById
);

module.exports = router;

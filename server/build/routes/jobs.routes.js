"use strict";

var express = require("express");

var router = express.Router();

var authJwt = require("../middlewares/authJwt");

var jobsCtrl = require("../controllers/job.controller"); //Create a Job


router.post("/", [authJwt.verifyToken, authJwt.isAdmin], jobsCtrl.createJob); //Show Jobs

router.get("/", [authJwt.verifyToken, authJwt.isUser], jobsCtrl.showJobs); //Get a Job

router.get("/:jobId", [authJwt.verifyToken, authJwt.isUser], jobsCtrl.getJobById); //Update a Job

router.put("/:jobId", [authJwt.verifyToken, authJwt.isAdmin], jobsCtrl.updateJobById); //Delete a Job

router["delete"]("/:jobId", [authJwt.verifyToken, authJwt.isAdmin], jobsCtrl.deleteJobById);
module.exports = router;
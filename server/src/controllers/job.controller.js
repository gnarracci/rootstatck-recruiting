const Jobs = require("../models/Jobs");

//Create a Job
export const createJob = async (req, res) => {
  try {
    console.log(req.body);
    const { job, description, location } = req.body;
    const newJob = new Jobs({
      job,
      description,
      location,
    });
    const savedJob = await newJob.save();
    res.status(200).json(savedJob);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
  }
};

//Get Jobs
export const showJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  } catch (error) {
    return res.status(404).json(error);
  }
};

//Get a Job
export const getJobById = async (req, res) => {
  try {
    const { jobId } = req.params;
    const job = await Jobs.findById(jobId);
    res.status(200).json(job);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
  }
};

//Update a Job
export const updateJobById = async (req, res) => {
  try {
    const updatedJob = await Jobs.findByIdAndUpdate(
      req.params.jobId,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedJob);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
  }
};

//Delete a Job
export const deleteJobById = async (req, res) => {
  try {
    const { jobId } = req.params;
    const jobDeleted = await Jobs.findByIdAndDelete(jobId);
    res.status(200).json(jobDeleted);
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong!" });
  }
};

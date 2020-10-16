"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteJobById = exports.updateJobById = exports.getJobById = exports.showJobs = exports.createJob = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Jobs = require("../models/Jobs"); //Create a Job


var createJob = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, job, description, location, newJob, savedJob;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log(req.body);
            _req$body = req.body, job = _req$body.job, description = _req$body.description, location = _req$body.location;
            newJob = new Jobs({
              job: job,
              description: description,
              location: location
            });
            _context.next = 6;
            return newJob.save();

          case 6:
            savedJob = _context.sent;
            res.status(200).json(savedJob);
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(404).json({
              message: "Something went wrong!"
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function createJob(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //Get Jobs


exports.createJob = createJob;

var showJobs = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var jobs;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Jobs.find();

          case 3:
            jobs = _context2.sent;
            res.status(200).json(jobs);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(404).json(_context2.t0));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function showJobs(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //Get a Job


exports.showJobs = showJobs;

var getJobById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var jobId, job;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            jobId = req.params.jobId;
            _context3.next = 4;
            return Jobs.findById(jobId);

          case 4:
            job = _context3.sent;
            res.status(200).json(job);
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(404).json({
              message: "Something went wrong!"
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function getJobById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //Update a Job


exports.getJobById = getJobById;

var updateJobById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedJob;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return Jobs.findByIdAndUpdate(req.params.jobId, req.body, {
              "new": true
            });

          case 3:
            updatedJob = _context4.sent;
            res.status(200).json(updatedJob);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(404).json({
              message: "Something went wrong!"
            }));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function updateJobById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //Delete a Job


exports.updateJobById = updateJobById;

var deleteJobById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var jobId, jobDeleted;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            jobId = req.params.jobId;
            _context5.next = 4;
            return Jobs.findByIdAndDelete(jobId);

          case 4:
            jobDeleted = _context5.sent;
            res.status(200).json(jobDeleted);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(404).json({
              message: "Something went wrong!"
            }));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function deleteJobById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteJobById = deleteJobById;
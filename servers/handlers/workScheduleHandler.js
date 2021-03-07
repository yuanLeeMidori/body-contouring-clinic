const WorkSchedule = require('../../models/workSchedule');

// create new
exports.addNewWorkSchedule = function (data) {
  return new Promise((resolve, reject) => {
    let newWorkSchedule = new WorkSchedule(data);
    newWorkSchedule.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`New workSchedule (id: ${newWorkSchedule._id}) is created.`);
      }
    });
  });
};

// view all
exports.viewAllWorkSchedules = function () {
  return new Promise((resolve, reject) => {
    WorkSchedule.find()
      .populate('staff')
      .populate('times')
      .populate('date')
      .then((workSchedules) => {
        resolve(workSchedules);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// view one
exports.viewWorkScheduleById = function (id) {
  return new Promise((resolve, reject) => {
    WorkSchedule.findOne({ _id: id })
      .populate('staff')
      .populate('times')
      .populate('date')
      .exec()
      .then((workSchedule) => {
        resolve(workSchedule);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// update one
exports.editWorkScheduleById = function (data, id) {
  return new Promise((resolve, reject) => {
    WorkSchedule.updateOne(
      { _id: id },
      {
        $set: data,
      }
    )
      .exec()
      .then(() => {
        resolve(`WorkSchedule (id: ${id}) is updated`);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// delete one
exports.deleteWorkScheduleById = function (id) {
  return new Promise((resolve, reject) => {
    WorkSchedule.deleteOne({ _id: id })
      .exec()
      .then(() => {
        resolve(`WorkSchedule (id: ${id}) is deleted`);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

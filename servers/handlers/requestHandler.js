const Request = require('../../models/request');

// create new
exports.addNewRequest = function (data) {
  return new Promise((resolve, reject) => {
    let newRequest = new Request(data);
    newRequest.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`new request (id: ${newRequest._id}) is created.`);
      }
    });
  });
};

// view all
exports.viewAllRequest = function () {
  return new Promise((resolve, reject) => {
    Request.find()
      .then((request) => {
        resolve(request);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// view one
exports.viewRequestById = function (id) {
  return new Promise((resolve, reject) => {
    Request.findOne({ _id: id })
      .exec()
      .then((request) => {
        resolve(request);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// update one
exports.editRequestById = function (data, id) {
  return new Promise((resolve, reject) => {
    Request.updateOne(
      { _id: id },
      {
        $set: data,
      }
    )
      .exec()
      .then(() => {
        resolve(`Request (id: ${id}) is updated`);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// delete one
exports.deleteRequestById = function (id) {
  return new Promise((resolve, reject) => {
    Request.deleteOne({ _id: id })
      .exec()
      .then(() => {
        resolve(`Request (id: ${id}) is deleted`);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

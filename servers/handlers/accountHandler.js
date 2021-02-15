const Account = require('../../models/account');

//Create
exports.addNewAccount = function (data) {
  return new Promise((resolve, reject) => {
    let newAccount = new Account(data);
    newAccount.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`New Account (id: ${newAccount._id}) is created`);
      }
    });
  });
};

//Read All
exports.viewAllAccount = function () {
  return new Promise((resolve, reject) => {
    Account.find()
      .then((offers) => {
        resolve(offers);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//Read
exports.viewOneAccountById = function (id) {
  return new Promise((resolve, reject) => {
    Account.findOne({ _id: id })
      .exec()
      .then((offer) => {
        resolve(offer);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//Update
exports.editAccountById = function (data, id) {
  return new Promise((resolve, reject) => {
    Account.updateOne({ _id: id }, { $set: data })
      .exec()
      .then(() => {
        resolve(`Account (id: ${id}) is updated`);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//Delete
exports.deleteAccountById = function (id) {
  return new Promise((resolve, reject) => {
    Account.deleteOne({ _id: id })
      .exec()
      .then(() => {
        resolve(`Account (id: ${id}) is deleted`);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

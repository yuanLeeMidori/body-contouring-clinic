const Page = require('../../models/page');

// create new
exports.addNewPage = function (res) {
  const page = new Page({
    accountId: '6023445bb9a0ed640bf9b1cf',
    isActive: true,
  });
  page
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// view all
exports.viewAllPages = function (res) {
  Page.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// view one
exports.viewOnePageById = function (req, res) {
  Page.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// update one
exports.editPageById = function (req, res) {
  const id = { _id: req.params.id };
  const update = {
    isActive: false,
  };
  Page.findByIdAndUpdate(id, update)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// delete one
exports.deletePageById = function (req, res) {
  Page.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

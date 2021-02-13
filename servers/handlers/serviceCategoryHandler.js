const ServiceCategory = require('../../models/serviceCategory');

// create new
exports.addNewServiceCategory = function (res) {
  const serviceCategory = new ServiceCategory({
    CategoryName: 'Facials',
  });
  serviceCategory
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// view all
exports.viewAllServiceCategory = function (res) {
  ServiceCategory.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// view one
exports.viewServiceCategoryById = function (req, res) {
  ServiceCategory.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// update one
exports.editServiceCategoryById = function (req, res) {
  const id = { _id: req.params.id };
  const update = {
    CategoryName: 'Radio Frequency',
  };
  ServiceCategory.findByIdAndUpdate(id, update)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// delete one
exports.deleteServiceCategoryById = function (req, res) {
  ServiceCategory.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

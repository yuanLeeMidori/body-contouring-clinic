const ServiceCategory = require('../../models/serviceCategory');

// create new
function addNewServiceCategory(res) {
  const serviceCategory = new ServiceCategory({
    serviceCategoryId: 1,
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
}

// view all
function viewAllServiceCategory(res) {
  ServiceCategory.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// view one
function viewOneServiceCategory(req, res) {
  ServiceCategory.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
// update one
// delete one

exports.addNewServiceCategory = addNewServiceCategory;
exports.viewAllServiceCategory = viewAllServiceCategory;
exports.viewOneServiceCategory = viewOneServiceCategory;

const ServiceCategory = require('../../models/serviceCategory');

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

function viewAllServiceCategory(res) {
    ServiceCategory.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

exports.addNewServiceCategory = addNewServiceCategory;
exports.viewAllServiceCategory = viewAllServiceCategory;
const Service = require('../../models/service');

// create new
function addNewService(res) {
  const service = new Service({
    serviceId: 1,
    serviceCategory: '60249ed26a84e022cf790fb6',
    serviceName: 'Classic Facial',
    serviceDescription:
      'An introduction to facial treatments for your skin. Includes cleansing, skin analysis, exfoliation, face massage and mask, cream.',
    isActive: true,
  });
  service
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// view all
function viewAllServices(res) {
  Service.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

// view one
function viewOneService(req, res) {
  Service.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
// update one
// delete one

exports.addNewService = addNewService;
exports.viewAllServices = viewAllServices;
exports.viewOneService = viewOneService;

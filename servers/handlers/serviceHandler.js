const Service = require('../../models/service');

// create new
exports.addNewService = function (res) {
  const service = new Service({
    serviceCategory: '60273c650ab612462b27ddb2',
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
};

// view all
exports.viewAllServices = function (res) {
  Service.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// view one
exports.viewOneServiceById = function (req, res) {
  Service.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// update one
exports.editServiceById = function (req, res) {
  const id = { _id: req.params.id };
  const update = {
    serviceCategory: '60273c650ab612462b27ddb2',
    serviceName: 'Acne Control Facial',
    serviceDescription:
      'Addresses excessive oiliness and acne prone skin by reducing bacterial infection and moisturizing the skin.',
    isActive: true,
  };
  Service.findByIdAndUpdate(id, update)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// delete one
exports.deleteServiceById = function (req, res) {
  Service.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

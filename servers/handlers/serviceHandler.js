const Service = require('../../models/service');

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

exports.addNewService = addNewService;

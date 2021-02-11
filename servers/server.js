const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./dbConnection');
const Account = require('../models/account');
const ServiceCategory = require('../models/serviceCategory');
const Service = require('../models/service');
const serviceHandler = require('./serviceHandle');

app.use(cors());
app.use(bodyParser.json());
db();

// DB API
// account
app.get('/add-account', (req, res) => {
  const account = new Account({
    firstName: 'Yuan',
    lastName: 'Lee',
    userID: '6647lee',
    password: '!pass',
    email: 'ihavesixchildren@protonmail.ch',
  });
  account
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/accounts', (req, res) => {
  Account.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/account/:id', (req, res) => {
  Account.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// service-category
app.get('/add-service-category', (req, res) => {
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
});

app.get('/service-categories', (req, res) => {
  ServiceCategory.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// service
app.get('/add-service', (req, res) => {
  const service = new Service({
    serviceId: 1,
    serviceCategory: ServiceCategory.findById('60249ed26a84e022cf790fb6'),
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
});

// requestCategory
app.get('/add-requestCategory', (req, res) => {
  serviceHandler.addRequestCategory().catch((err) => {console.log(err);});
});


app.use('/api', (req, res) => res.json({ backServer: 'true' }));

app.listen(port, () => {
  console.log('Express http server listening on: ' + port);
});

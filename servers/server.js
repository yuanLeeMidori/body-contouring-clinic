const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./dbConnection');
const mongoose = require('mongoose');
const accountHandler = require('./handlers/accountHandler');
const accountLevelHandler = require('./handlers/accountLevelHandler');
const balanceHandler = require('./handlers/balanceHandler');
const balanceHistoryHandler = require('./handlers/balanceHistoryHandler');
const serviceCategoryHandler = require('./handlers/serviceCategoryHandler');
const serviceHandler = require('./handlers/serviceHandler');
const requestCategoryHandler = require('./handlers/requestCategoryHandler');
const pageHandler = require('./handlers/pageHandler');
const offerHandler = require('./handlers/offerHandler');

app.use(cors());
app.use(bodyParser.json());
db();

mongoose.set('useFindAndModify', false);
//Account
app.get('/add-account', (req, res) => {
  accountHandler.addNewAccount(res);
});

app.get('/accounts', (req, res) => {
  accountHandler.viewAllAccount(res);
});

app.get('/accounts/:id', (req, res) => {
  accountHandler.viewOneAccountById(req, res);
});

app.get('/accounts/:id/edit', (req, res) => {
  accountHandler.editAccountById(req, res);
});

app.get('/accounts/:id', (req, res) => {
  accountHandler.deleteAccountById(req, res);
});

//Account Level
app.get('/add-account-level', (req, res) => {
  accountLevelHandler.addNewAccountLevel(res);
});

app.get('/account-level', (req, res) => {
  accountLevelHandler.viewAllAccountLevel(res);
});

app.get('/account-level/:id', (req, res) => {
  accountLevelHandler.viewOneAccountLevelById(req, res);
});

app.get('/account-level/:id/edit', (req, res) => {
  accountLevelHandler.editAccountLevelById(req, res);
});

app.get('/account-level/:id', (req, res) => {
  accountLevelHandler.deleteAccountLevelById(req, res);
});

//Balance
app.get('/add-balance', (req, res) => {
  balanceHandler.addNewBalance(res);
});

app.get('/balances', (req, res) => {
  balanceHandler.viewAllBalance(res);
});

app.get('/balances/:id', (req, res) => {
  balanceHandler.viewOneBalanceById(req, res);
});

app.get('/balances/:id/edit', (req, res) => {
  balanceHandler.editBalanceById(req, res);
});

app.get('/balances/:id', (req, res) => {
  balanceHandler.deleteBalanceById(req, res);
});

//Balance History
app.get('/add-balance-history', (req, res) => {
  balanceHistoryHandler.addNewBalanceHistory(res);
});

app.get('/balance-histories', (req, res) => {
  balanceHistoryHandler.viewAllBalanceHistory(res);
});

app.get('/balance-history/:id', (req, res) => {
  balanceHistoryHandler.viewAllBalanceHistory(req, res);
});

app.get('/balance-history/:id/edit', (req, res) => {
  balanceHistoryHandler.editBalanceHistoryById(req, res);
});

app.get('/balance-history/:id', (req, res) => {
  balanceHistoryHandler.deleteBalanceHistoryById(req, res);
});

// service-category
app.get('/add-service-category', (req, res) => {
  serviceCategoryHandler.addNewServiceCategory(res);
});

app.get('/service-categories', (req, res) => {
  serviceCategoryHandler.viewAllServiceCategory(res);
});

app.get('/service-category/:id', (req, res) => {
  serviceCategoryHandler.viewServiceCategoryById(req, res);
});

app.get('/service-category/:id/edit', (req, res) => {
  serviceCategoryHandler.editServiceCategoryById(req, res);
});

app.delete('/service-category/:id', (req, res) => {
  serviceCategoryHandler.deleteServiceCategoryById(req, res);
});

// service
app.get('/add-service', (req, res) => {
  serviceHandler.addNewService(res);
});

app.get('/services', (req, res) => {
  serviceHandler.viewAllServices(res);
});

app.get('/service/:id', (req, res) => {
  serviceHandler.viewOneServiceById(req, res);
});

app.get('/service/:id/edit', (req, res) => {
  serviceHandler.editServiceById(req, res);
});

app.delete('/service/:id', (req, res) => {
  serviceHandler.deleteServiceById(req, res);
});

// requestCategory
app.get('/add-requestCategory', (req, res) => {
  requestCategoryHandler.addNewRequestCategory(res);
});

app.get('/request-categories', (req, res) => {
  requestCategoryHandler.viewAllRequestCategories(res);
});

app.get('/edit-requestCategory', (req, res) => {
  requestCategoryHandler.editRequestCategory(res);
});

// page
app.get('/add-page', (req, res) => {
  pageHandler.addNewPage(res);
});

app.get('/pages', (req, res) => {
  pageHandler.viewAllPages(res);
});

app.get('/page/:id', (req, res) => {
  pageHandler.viewOnePageById(req, res);
});

app.get('/page/:id/edit', (req, res) => {
  pageHandler.editPageById(req, res);
});

app.delete('/page/:id', (req, res) => {
  pageHandler.deletePageById(req, res);
});

// offer
app.get('/add-offer', (req, res) => {
  offerHandler.addNewOffer(res);
});

app.get('/offers', (req, res) => {
  offerHandler.viewAllOffers(res);
});

app.get('/offer/:id', (req, res) => {
  offerHandler.viewOneOfferById(req, res);
});

app.get('/offer/:id/edit', (req, res) => {
  offerHandler.editOfferById(req, res);
});

app.delete('/offer/:id', (req, res) => {
  offerHandler.deleteOfferById(req, res);
});

app.use('/api', (req, res) => res.json({ backServer: 'true' }));

app.listen(port, () => {
  console.log('Express http server listening on: ' + port);
});

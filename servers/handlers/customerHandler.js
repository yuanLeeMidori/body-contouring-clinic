const Customer = require('../../models/customer');

// Create
function addNewCustomer(res){

  // var reqAccountId = req.query.accountId;
  // var reqLastLoginTime = req.query.lastLoginTime;
  // var reqBalaceId = req.query.balaceId;

  // const request = new Request({
  //  accountId: "6023445bb9a0ed640bf9b1cf",
  //  lastLoginTime: new Date(),
  //  balaceId: ""
  // });

  const customer = new Customer({
    accountId: "6023445bb9a0ed640bf9b1cf",
    lastLoginTime: new Date(),
    balaceId: ""
  });

  customer
  .save()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Update 
function editCustomer(res){
  Customer.updateOne(
    {
      _id: "6024ce2b59f47d1d401ef0b9"    
    },
    {
      $set:{
        sin: "123-567-451"
      }
    }
  )
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
} 

// Delete
function deleteCustomer(res){
  Customer.deleteOne(
    {
      _id: ""
    }
  )  
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Read All
function viewAllCustomer(res){
  Customer.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Read One
function viewCustomer(req, res){
  Customer.findById(req.params.id)    
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

exports.addNewCustomer = addNewCustomer;
exports.editCustomer = editCustomer;
exports.deleteCustomer = deleteCustomer;
exports.viewAllCustomer = viewAllCustomer;
exports.viewCustomer = viewCustomer;

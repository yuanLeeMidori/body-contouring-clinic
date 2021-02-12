const Staff = require('../../models/staff');

// Create
function addNewStaff(res){

  // var reqAccountId = req.query.accountId;
  // var reqActive = req.query.isActive;
  // var reqSin = req.query.sin;
  // const staff = new Staff({
  //  accountId : reqAccountId,
  //  isActive : reqActive,
  //  sin : reqSin,
  // });

  const staff = new Staff({
    accountId : "6023445bb9a0ed640bf9b1cf",
    isActive : true,
    sin : '123-456-789',
  });

  staff
  .save()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Update 
function editStaff(res){
  Staff.updateOne(
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
function deleteStaff(res){
  Staff.deleteOne(
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
function viewAllStaff(res){
  Staff.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Read One
function viewStaff(req, res){
  Staff.findById(req.params.id)    
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

exports.addNewStaff = addNewStaff;
exports.editStaff = editStaff;
exports.deleteStaff = deleteStaff;
exports.viewAllStaff = viewAllStaff;
exports.viewStaff = viewStaff;

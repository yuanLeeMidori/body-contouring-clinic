const Request = require('../../models/request');

// Create
function addNewRequest(res){

  // var reqAccountId = req.query.accountId;
  // var reqServiceCategoryId = req.query.serviceCategoryId;
  // var reqRequestCategoryId = req.query.requestCategoryId;
  // var reqTitle = req.query.title;
  // var reqContents = req.query.contents;
  // var reqDate = req.query.date;
  // var reqLastRequestTime = req.query.lastRequestTime;
  // var reqAttachedFile = req.query.attachedFile;
  // const request = new Request({
  //   accountId: reqAccountId, 
  //   serviceCategoryId: reqServiceCategoryId, 
  //   requestCategoryId: reqRequestCategoryId, 
  //   title: reqTitle,
  //   contents: reqContents,
  //   date: reqDate,
  //   lastRequestTime: reqLastRequestTime,
  //   attachedFile: reqAttachedFile 
  // });

  const request = new Request({
    accountId: "6023445bb9a0ed640bf9b1cf", 
    serviceCategoryId: "602587c76583be606e2b5bc5", 
    requestCategoryId: "6024ce1d59f47d1d401ef0b8", 
    title: "How can I join the membership program?",
    contents: "Hello, I am Eunbee Kim",
    date: new Date(),
    lastRequestTime: new Date(),
    attachedFile: "test.jpg"
  });

  request
  .save()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Update 
function editRequest(res){
  Request.updateOne(
    {
      _id: "6024ce2b59f47d1d401ef0b9"    
    },
    {
      $set:{
        title: "ShipmentTest"
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
function deleteRequest(res){
  Request.deleteOne(
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
function viewAllRequest(res){
  Request.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Read One
function viewRequest(req, res){
  Request.findById(req.params.id)    
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

exports.addNewRequest = addNewRequest;
exports.editRequest = editRequest;
exports.deleteRequest = deleteRequest;
exports.viewAllRequest = viewAllRequest;
exports.viewRequest = viewRequest;

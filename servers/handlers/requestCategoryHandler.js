const RequestCategory = require('../../models/requestCategory');

// Create
function addNewRequestCategory(res){

  // var reqCatName = req.query.categoryName;
  // const requestCategory = new RequestCategory({
  //   RequestCategoryName : reqCatName
  // });

  const requestCategory = new RequestCategory({
    RequestCategoryName : 'MemberShip'
  });

  requestCategory
  .save()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Read All
function viewAllRequestCategories(res){
  RequestCategory.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

// Read One
function viewRequestCategory(req, res){
  RequestCategory.findById(req.params.id)    
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

exports.addNewRequestCategory = addNewRequestCategory;
exports.viewAllRequestCategories = viewAllRequestCategories;
exports.viewRequestCategory = viewRequestCategory;

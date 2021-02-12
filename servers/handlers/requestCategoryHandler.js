const RequestCategory = require('../../models/requestCategory');


function addNewRequestCategory(res){
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

function viewAllRequestCategories(res){
  RequestCategory.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}
exports.addNewRequestCategory = addNewRequestCategory;
exports.viewAllRequestCategories = viewAllRequestCategories;

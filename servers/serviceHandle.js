const RequestCategory = require('../models/requestCategory');


function addRequestCategory(){
    const requestCategory = new RequestCategory({
      RequestCategoryName : 'MemberShip'
    });

    requestCategory
    .save()
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

}

exports.addRequestCategory = addRequestCategory;

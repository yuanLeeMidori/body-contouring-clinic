const Offer = require('../../models/offer');

// create new
exports.addNewOffer = function (res) {
  const offer = new Offer({
    offerName: '(small) Laser Hair Removal - 6 session package',
    appliedService: '60273bca1c9437459aad2ff8',
    startDate: '2020-01-01',
    endDate: '2021-12-31',
    description: 'Chin, Upper lip, Lower lip, Sideburns, Cheeks, Forehead, Areola, Ears',
    imageURL: 'http://body-contouring-clinic/laser-first-time',
  });
  offer.startDate instanceof Date;
  offer.endDate instanceof Date;
  offer
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// view all
exports.viewAllOffers = function (res) {
  Offer.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// view one
exports.viewOneOfferById = function (req, res) {
  Offer.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// update one
exports.editOfferById = function (req, res) {
  const id = { _id: req.params.id };
  const update = {
    offerName: '(medium) Laser Hair Removal - 6 session package',
    endDate: '2021-08-08',
  };
  Offer.findByIdAndUpdate(id, update)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

// delete one
exports.deleteOfferById = function (req, res) {
  Offer.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

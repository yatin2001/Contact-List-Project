"use strinct";

const ObjectId = require("mongodb").ObjectId;
const { Int32 } = require("mongodb");
const dbo = require("../db");
const Contact = require("../models/contact");
dbo.connectToServer(() => console.log("ok connected"));

//publics
const addContact = (req, res, next) => {
  const { name, number, avatar, email } = { ...req.body };
  const contact = new Contact(name, number, avatar, email);
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("contacts")
    .find({ contactEmail: email })
    .toArray(function (err, result) {
      if (err) console.log("Error fetching contactEmail: $", err);
      else {
        if (result.length > 0) {
          res.status(400).send("Contact with same email already exists!");
        } else {
          dbConnect
            .collection("contacts")
            .find({ contactNumber: number })
            .toArray(function (err, _result) {
              if (err) console.log("Error fetching contactNumber: $", err);
              else {
                if (_result.length > 0) {
                  res.status(400).send("Contact with same number already exists!");
                } else {
                  dbConnect
                    .collection("contacts")
                    .insertOne(contact, function (err, result) {
                      if (err) {
                        res.status(400).send("Error inserting matches!");
                      } else {
                        console.log(
                          `Added a new contact with id ${result.insertedId}`
                        );
                        res.status(204).send("New contact added!");
                      }
                    });
                }
              }
            });
        }
      }
    });
};
const getContactByNumber = (req, res, next) => {
  const dbConnect = dbo.getDb();
  const number = req.body.number;
  dbConnect
    .collection("contacts")
    .find({ contactNumber: number })
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        console.log(result);
        res.json(result);
      }
    });
};
const getContactByEmail = (req, res, next) => {
  const dbConnect = dbo.getDb();
  const email = req.body.email;
  dbConnect
    .collection("contacts")
    .find({ contactEmail: email })
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        console.log(result);
        res.json(result);
      }
    });
};
const getAllContacts = (req, res, next) => {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("contacts")
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        console.log(result);
        res.json(result);
      }
    });
};
const updateContact = (req, res, next) => {
  const dbConnect = dbo.getDb();
  const query = {
    _id: new ObjectId(req.params.id),
    contactName: req.body.name,
    contactNumber: req.body.number,
    contactEmail: req.body.email,
    contactAvatar: req.body.avatar,
  };
  const data = {
    $set: query,
  };
  dbConnect
    .collection("contacts")
    .updateOne(query, data, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating likes on listing with id ${listingQuery.id}!`);
      } else {
        console.log("1 document updated");
      }
    });
};
const deleteContact = (req, res, next) => {
  const dbConnect = dbo.getDb();
  const query = { _id: new ObjectId(req.params.id) };
  console.log(query);
  dbConnect.collection("contacts").deleteOne(query, function (err, _result) {
    if (err) {
      res
        .status(400)
        .send(`Error deleting listing with id ${listingQuery.listing_id}!`);
    } else {
      console.log("_res", _result);
      res.status(204).send();
    }
  });
};

module.exports = {
  addContact,
  getContactByEmail,
  getContactByNumber,
  getAllContacts,
  updateContact,
  deleteContact,
};

//importing the uuid
let { v4: uuidv4 } = require("uuid");
const pm = require("../models/postmodel");
let addpost = async (req, res) => {
  try {
    let data = new pm({ ...req.body, _id: uuidv4() });//it will generate uniquid automatically
    await data.save();
    res.json({ message: "Post created" });
  } catch (err) {
    res.json({ message: "Error in adding post" });
  }
};
let getposts = async (req, res) => {
  try {
    let data = await pm.find({ accept: "true" });//false--give all the post which is accept-true/false
    res.json(data);
  } catch (err) {
    res.json({ message: "Error in fetching Articals" });
  }
};
let getbycat = async (req, res) => {
  try {
    let data = await pm.find({ cat: req.params.cat, accept: "true" });//it will give only the "true" one
    res.json(data);
  } catch (err) {
    res.json({ message: "Error in fetching data" });
  }
};


let getdonebyme = async (req, res) => {
  try {
    let data = await pm.find({ uid: req.params.uid });
    res.json(data);
  } catch (err) {
    res.json({ message: "Error in Fetching Data" });
  }
};
module.exports = { addpost, getposts, getbycat, getdonebyme };

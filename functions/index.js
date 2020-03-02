const functions = require("firebase-functions");

const config = require("./key/firebase-config.js");
const firebaseConfig = config;
const firebase = require("firebase");

const app = require("express")();

const {
  getAllScreams,
  postOneScream,
  getScream
} = require("./handlers/screams");

const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getUserDetails
} = require("./handlers/users");

const FBAuth = require("./util/fbAuth");

// Screams routes
app.get("/screams", getAllScreams);
app.post("/screams", FBAuth, postOneScream);
app.get("/screams/:screamId", getScream);
// TODO: delete scream
// TODO: like scream
// TODO: unlike scream
// TODO: comment on scream

//User routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getUserDetails);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.region("europe-west1").https.onRequest(app);

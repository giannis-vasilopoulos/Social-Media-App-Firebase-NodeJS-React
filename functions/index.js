const functions = require("firebase-functions");

const config = require("./key/firebase-config.js");
const firebaseConfig = config;
const firebase = require("firebase");

const app = require("express")();

const { getAllScreams, postOneScream } = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addUserDetails
} = require("./handlers/users");
const FBAuth = require("./util/fbAuth");

// Screams routes
app.get("/screams", getAllScreams);
app.post("/screams", FBAuth, postOneScream);

//User routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user", FBAuth, addUserDetails);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.region("europe-west1").https.onRequest(app);
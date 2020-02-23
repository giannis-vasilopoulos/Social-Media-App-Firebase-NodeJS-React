const admin = require("firebase-admin");
const serviceAccount = require("../key/serviceAccountKeys.json");
const config = require("../key/firebase-config.js");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket
});

const db = admin.firestore();

module.exports = { admin, db };

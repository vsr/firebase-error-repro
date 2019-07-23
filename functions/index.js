const functions = require("firebase-functions");
const admin = require("firebase-admin");
// admin.initializeApp(functions.config().firebase);
admin.initializeApp();
const db = admin.firestore();
exports.helloWorld = functions.https.onRequest((request, response) => {
  let docRef = db.collection("users").doc("alovelace");

  let setAda = docRef.set({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log(setAda);
  response.send("Hello from Firebase!");
});

const functions = require('firebase-functions');
const admin = require('firebase-admin');
require('dotenv').config();

console.log(process.env.TEST_OUTPUT);
exports.addTest = functions.firestore
    .document('TestData/{testId}')
    .onCreate((snap) => {
        const data = snap.get("Data");
        const newData = data + "!Cloud Function!";
        return snap.ref.update({Data: newData});
    });
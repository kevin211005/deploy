const admin = require('firebase-admin');

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
adminConfig.credential = admin.credential.applicationDefault();
admin.initializeApp(adminConfig);

const test = require('./test');

exports.addTest = test.addTest;
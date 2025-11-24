// functions/index.js

const express = require("express");
const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2/options");

setGlobalOptions({ region: "southasia1" });

// Import modular routes
const appConfigRoute = require("./src/appConfig");
const healthzRoute = require("./src/healthz");

const app = express();

// Attach all routers
app.use(appConfigRoute);
app.use(healthzRoute);

// Export main function
exports.appConfig = onRequest(app);

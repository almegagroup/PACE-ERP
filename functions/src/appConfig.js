// functions/src/appConfig.js

const express = require("express");

const router = express.Router();

router.get("/app-config", (_req, res) => {
  res.json({
    appName: "PACE-ERP",
    env: process.env.NODE_ENV || "development",
    version: "0.0.1",
  });
});

module.exports = router;

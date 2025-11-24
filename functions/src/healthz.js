// functions/src/healthz.js

const express = require("express");
const { log } = require("./utils/logger");

const router = express.Router();

router.get("/healthz", (req, res) => {
  try {
    log("Health check OK", { path: req.path });

    res.status(200).json({
      status: "OK",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV || "development",
      version: "0.0.1",
    });
  } catch (err) {
    log("Health check FAILED", { error: err.message });

    res.status(503).json({
      status: "ERROR",
      error: err.message,
    });
  }
});

module.exports = router;

// functions/src/config/secrets.js

const { log } = require("../utils/logger");

// Strict: required secret (prod এ missing হলে crash করে)
function requireSecret(name) {
  const value = process.env[name];

  if (!value) {
    const msg = `Missing required secret: ${name}`;
    log(msg, { level: "error", secretName: name });
    throw new Error(msg);
  }

  return value;
}

// Soft: optional secret (dev এ না থাকলেও app চলবে)
function getOptionalSecret(name) {
  const value = process.env[name];

  if (!value) {
    log(`Optional secret not set`, { level: "warn", secretName: name });
    return null;
  }

  return value;
}

module.exports = {
  requireSecret,
  getOptionalSecret,
};

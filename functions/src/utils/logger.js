// functions/src/utils/logger.js

function log(message, meta = {}) {
  const payload = {
    message,
    ...meta,
    timestamp: new Date().toISOString(),
  };

  console.log(JSON.stringify(payload));
}

module.exports = { log };

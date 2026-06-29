//==================================================
// DEBUG LOGGER
//==================================================

class Debug {
  constructor() {
    this.logs = [];
    this.startTime = new Date();
  }

  //==============================
  // Private Logger
  //==============================

  _push(level, message) {
    const log = {
      time: Utilities.formatDate(
        new Date(),
        Session.getScriptTimeZone(),
        "HH:mm:ss"
      ),
      level,
      message
    };

    this.logs.push(log);
    Logger.log(
      `[${log.time}] ${level.padEnd(7)} ${message}`
    );
  }

  //==============================
  // Public Methods
  //==============================

  info(message) {
    this._push("INFO", message);
  }
  success(message) {
    this._push("SUCCESS", message);
  }
  warn(message) {
    this._push("WARNING", message);
  }
  error(error) {
    const message =
      error instanceof Error
      ? error.message
      : String(error);
    this._push("ERROR", message);
  }

  //==============================
  // Finish
  //==============================

  finish() {
    const elapsed =
      new Date() - this.startTime;
    this.success(
      `Completed in ${elapsed} ms`
    );

  }

  //==============================
  // Export
  //==============================

  export() {
    return this.logs;
  }
}

function testDebug() {
  const debug = new Debug();
  debug.info("Starting test");
  debug.success("Everything works");
  debug.warn("This is a warning");
  debug.error("Example error");
  debug.finish();
  Logger.log(JSON.stringify(debug.export(), null, 2));
}

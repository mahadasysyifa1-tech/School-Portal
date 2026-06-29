//==================================================
// API
//==================================================

function api(request) {
  const debug = new Debug();
  try {
    const data = new Data(debug);
    let result;
    switch (request.action) {

      case "ping":
        result = {
          status: "OK",
          timestamp: new Date()
        };
        break;

      case "eventLog":
        result = data.eventLog();
        break;

      case "silabus":
        result = data.silabus();
        break;

      case "mapel":
        result = data.mapel();
        break;

      default:
        throw new Error(
          `Unknown action "${request.action}"`
        );
    }

    debug.finish();
    return {
      success: true,
      data: result,
      debug: debug.export()
    };
  }

  catch (err) {
    debug.error(err);
    debug.finish();

    return {
      success: false,
      error: err.toString(),
      debug: debug.export()
    };
  }

}

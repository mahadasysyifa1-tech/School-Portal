//==================================================
// API
//==================================================

/**
 * Bootstrap the application.
 *
 * Loads all data required by the frontend.
 *
 * @returns {Object}
 */
function bootstrap() {

  const debug = new Debug();

  try {

    const data = new Data(debug);

    const result = data.bootstrap();

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


//==================================================
// TEST
//==================================================

function testBootstrap() {

  const result = bootstrap();

  Logger.log(
    JSON.stringify(result, null, 2)
  );

}

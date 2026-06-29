//==================================================
// DATA LAYER
//==================================================

class Data {

  constructor(debug) {

    this.debug = debug;
    this.db = getDatabase();

    this.debug.info("Database connected.");

  }

  //================================================
  // Event Log
  //================================================

  eventLog() {

    this.debug.info("Loading Event Log...");

    const values = getSheet(
      CONFIG.SHEETS.EVENTLOG
    ).getDataRange().getValues();

    this.debug.success(
      `${values.length - 1} event rows loaded.`
    );

    return values;

  }

  //================================================
  // Silabus
  //================================================

  silabus() {
    this.debug.info("Loading Silabus...");

    const values = getSheet(
      CONFIG.SHEETS.SILABUS
    ).getDataRange().getValues();

    this.debug.success(
      `${values.length - 1} silabus rows loaded.`
    );

    return values;

  }

  //================================================
  // Data Mapel
  //================================================

  mapel() {
    this.debug.info("Loading Data Mapel...");

    const values = getSheet(
      CONFIG.SHEETS.MAPEL
    ).getDataRange().getValues();

    this.debug.success(
      `${values.length - 1} mapel rows loaded.`
    );

    return values;

  }

  //================================================
  // Bootstrap
  //================================================

  bootstrap() {
    this.debug.info("Bootstrapping application...");
    return {
      version: "0.1.0",
      generated: new Date(),
      eventLog: this.eventLog(),
      silabus: this.silabus(),
      mapel: this.mapel()
    };
  }

}

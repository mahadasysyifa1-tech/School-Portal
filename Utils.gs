//==================================================
// UTILITIES
//==================================================

/**
 * Open the project database.
 *
 * @returns {Spreadsheet}
 */
function getDatabase() {
  return SpreadsheetApp.openById(
    CONFIG.SPREADSHEET_ID
  );
}

/**
 * Return a sheet by config name.
 *
 * Example:
 * getSheet(CONFIG.SHEETS.EVENTLOG)
 *
 * @param {string} sheetName
 * @returns {Sheet}
 */
function getSheet(sheetName) {

  const sh = getDatabase().getSheetByName(sheetName);

  if (!sh) {
    throw new Error(
      `Sheet "${sheetName}" not found.`
    );
  }

  return sh;

}

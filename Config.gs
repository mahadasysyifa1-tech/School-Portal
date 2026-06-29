//==================================================
// CONFIGURATION
//==================================================

const CONFIG = {

  //==============================
  // Spreadsheet
  //==============================

  SPREADSHEET_ID: '1_Q-ly2ApwDD-QfgKvpXBtO30jNRt4c-QHroma_k1zDY',

  //==============================
  // Sheet Names
  //==============================

  SHEETS: {

    EVENTLOG: 'eventlog',
    SILABUS: 'Silabus',
    MAPEL: 'Data Mapel'

  },

  //==============================
  // Column Indexes (0-based)
  //==============================

  COL: {

    EVENT: {

      DATE: 0,
      RULE_ID: 1,
      SESSION: 2,
      START_END: 3,
      START: 4,
      END: 5,
      EVENT: 6

    },

    SILABUS: {

      SUBJECT: 1,
      TARGET_PAGE: 4,
      TARGET_MATERIAL: 5

    },

    MAPEL: {

      CODE: 0,
      SUBJECT: 1,
      TEACHER: 2

    }

  }

};

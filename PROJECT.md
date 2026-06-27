# Project Architecture

## Philosophy

- Google Sheets is the only database.
- Apps Script is the backend.
- HTML/CSS/JavaScript is the frontend.
- Single Page Application (SPA).

---

## Layers

Frontend

↓

API

↓

Data Layer

↓

Google Sheets

---

## Core Files

Config.gs

Project constants.

Debug.gs

Centralized logging.

Utils.gs

Shared helper functions.

---

## Feature Files

Data.gs

Reads spreadsheet data.

API.gs

Exposes backend functions.

Main.gs

Application entry point.

---

## UI Files

Index.html

Application shell.

Navbar.html

Navigation.

Loader.html

Loading indicator.

DebugPanel.html

Debug console.

Kaldik.html

Monthly calendar.

Jadwal.html

Schedule.

Silabus.html

Silabus cards.

Mapel.html

Subject list.

---

## Coding Rules

- No magic numbers.
- No duplicated code.
- One responsibility per file.
- All sheet access goes through Data.gs.
- All frontend calls go through API.gs.

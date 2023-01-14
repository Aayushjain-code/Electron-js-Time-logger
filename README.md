## Electron js Time-logger

- Electron js Desktop based Application
- Logs time of an Employee for a task its duration
- Used Reactjs in frontend.
- MaterialUI as component library.
- Dayjs for time related stuffs.
- jspdf & jspdf-autotable for pdf conversion
- uuid for unique id for keys
- xlsx for excel sheet conversion

### Steps to Replicate:

- clone the repo
- npm install
- npm start

Functionality:

- On play starts timer.
- On stop stops timer and adds the reading to table.
- Table has following columns: Employee name,start,end,Actual time,delete button.

Added functionalities:

- Input box for employee name.
- On delete button click user can delete a specific reading.
- There is a permanent clock in bottom right of Application showing current time.
- When some readings are selected then only table and utilities buttons(on bottom will be shown).
- I have also Added export as PDF and Excel file functionality.

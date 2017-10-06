# googleMapsExpress

A google map project that visualize the provinces of Philippines fetching data from google spreadsheet using the express node framework to connect the google map API and the google spreadsheet API

## Prerequisites

[Node.js installed](https://www.npmjs.com/)

Follow Google's Documentation on how to turn on your Google Sheets API to create a ```client_secret.json``` file.

[Google Credentials](https://developers.google.com/sheets/api/quickstart/nodejs)

A Google Account

## Build with 

[Express framework module ](https://expressjs.com/en/starter/installing.html) 

[CORS](https://enable-cors.org/server_expressjs.html) 

## Running the Test

*  ```read.js``` is the module file that use expressNode calls when connecting and fetching data from Google SpreadSheet API
*  ```index.js``` This app starts a server and listens on port 3000 for connections.

```javascript
node index.js /// to start the web app
```

### ```exports.readSheet = function(sheetID, callback) ```
* ```sheetID``` - the module needs this parameter which is used to identify which spreadsheet is to be accessed.
* ```callback``` - This parameter calls a callback function.


## Deployment

* change the ```sheetID``` variable in ``index.js`` 

```javascript
let sheetID = '1_tG0XIS00c2NrB_YourSpreadSheetIDHere'
```

* change the ``` range``` variable in ``read.js`` 
```javascript
 let sheets = google.sheets('v4');
    sheets.spreadsheets.values.get({
      auth: auth,
      spreadsheetId: sheetID,
      range: 'data1!A3:D', /// that refers to a group of cells in the spreadsheet
```


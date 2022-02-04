// var xlsx = require("xlsx");

// var wb  = xlsx.readFile("./data/excelData.xlsx");
// console.log(wb);

// var sheetNames = wb.SheetNames
// console.log(sheetNames);

// var ws = wb.Sheets['Sheet1']

// // console.log(ws);

// var excelArr = xlsx.utils.sheet_to_json(ws)
// console.log(excelArr);

// module.exports = excelArr

//function

var xlsx = require("xlsx");
function getDataFromExcel(filepath,sheetName) {
//creating workbook object
var wb  = xlsx.readFile(filepath);
// console.log(wb);

var sheetNames = wb.SheetNames
// console.log(sheetNames);

//creating workshett object
var ws = wb.Sheets[sheetName]

// console.log(ws);
//converting worksheet into  array of object
var excelArr = xlsx.utils.sheet_to_json(ws)
return excelArr
}
module.exports = getDataFromExcel
// console.log(getDataFromExcel("./data/excelData.xlsx", 'Sheet1'));

//"./data/excelData.xlsx"  ==> filepath
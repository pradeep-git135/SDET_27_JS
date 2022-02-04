

var xlsx = require('xlsx');

function readDataFromExcel(filePath,sheetName) {
    
    //create a workbook object
        var workbook = xlsx.readFile(filePath);

        // console.log(workbook);

        // var sheetnames = workbook.SheetNames
        // console.log(sheetnames);

            //create a worksheet object
        let worksheet = workbook.Sheets[sheetName]
        // console.log(worksheet);

        //convert worksheet into array of objects
        var excelArray = xlsx.utils.sheet_to_json(worksheet);
        // console.log(excelArray);
        return excelArray
}
module.exports = readDataFromExcel
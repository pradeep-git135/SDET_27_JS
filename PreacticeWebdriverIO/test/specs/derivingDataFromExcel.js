var exceldata = require("../../data/readDataFromExcel")
describe('', () => {
    it('', () => {
      console.log( exceldata("./data/excelData.xlsx", 'Sheet1'));
      var excelArr = exceldata("./data/excelData.xlsx", 'Sheet1');
      console.log("%%%%%%%%%%%%%%%%%%%%%%%%%"+excelArr[0].URL);
        
    });
    
});
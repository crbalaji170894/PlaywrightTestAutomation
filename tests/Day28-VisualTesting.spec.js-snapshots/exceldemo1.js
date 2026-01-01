const ExcelJs = require('exceljs');

// import ExcelJs class create object

// read file
// readworkbook
//read sheet
//iterate each row. each cell, each colnnumn

//after reading excel file we need to wait till to read complete files

// use await keeywrod, if use await keyword then wrap all code into async function

//await will be activate when aysnc function is present

//Second  type is use .then(function())

//https://rahulshettyacademy.com/upload-download-test/

async function ecxceltest() {

    //  create Object for the Excel clss and access Workbook Method

    const workbook = new ExcelJs.Workbook();

    // read Excel file with await keyword

    await workbook.xlsx.readFile("D:/javascript/excel/file_example_XLSX_10.xlsx");

    const worksheet = workbook.getWorksheet("Sheet1");
    
    // then iteration each row

    worksheet.eachRow((row, rownum) =>  // row contains full data about row, rowmum each row num
    {
        
        row.eachCell((cell,colNum) =>
        {
            //console.log(cell.value);

             console.log(`Row ${rownum}, Col ${colNum}: ${cell.value}`)
        })
    })
}


ecxceltest();

// Second way with out await keyowrd and asunc function


  //  create Object for the Excel clss and access Workbook Method

    const workbook = new ExcelJs.Workbook();

    // read Excel file with await keyword

    workbook.xlsx.readFile("D:/javascript/excel/file_example_XLSX_10.xlsx").then(function(){

    const worksheet = workbook.getWorksheet("Sheet1");

    // then iteration each row

    worksheet.eachRow((row, rownum) => 
    {
        row.eachCell((cell,colNum) =>
        {
          //  console.log(cell.value);

           console.log(`Row ${rownum}, Col ${colNum}: ${cell.value}`)
        })
    })
});

// remove function  => also will works
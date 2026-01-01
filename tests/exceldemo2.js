//Write Excel

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

let output = { rownum:-1, columnNum:-1}; // Java script Object

async function ecxceltest() {

    //  create Object for the Excel clss and access Workbook Method

    const workbook = new ExcelJs.Workbook();

    // read Excel file with await keyword

    await workbook.xlsx.readFile("D:/PlaywrightTestAutomation/excel/file_example_XLSX_10.xlsx");

    const worksheet = workbook.getWorksheet("Sheet1");
    
    // then iteration each row

    worksheet.eachRow((row, rownum) =>  // row contains full data about row, rowmum each row num
    {
        
        row.eachCell((cell,colNum) =>
        {
            if(cell.value == "United States")
            {
                output.rownum= rownum;
                output.columnNum = colNum;

                const cell = worksheet.getCell(output.rownum, output.columnNum);
                cell.value = "CUBA";
            }
        })
    })


    await workbook.xlsx.writeFile("D:/PlaywrightTestAutomation/excel/write_file_example_XLSX_10.xlsx");
}


ecxceltest();

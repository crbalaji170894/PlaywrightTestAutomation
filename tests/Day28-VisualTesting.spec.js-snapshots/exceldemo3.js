//Refactoring Excel nice methods

// readExcel() , writeExcel()

//Write Excel

const ExcelJs = require('exceljs');

//let output = { rownum:-1, columnNum:-1}; // Java script Object 

async function writeecxceltest(searchText, replaceText, filePath) {

    //  create Object for the Excel clss and access Workbook Method

    const workbook = new ExcelJs.Workbook();

    // read Excel file with await keyword

    await workbook.xlsx.readFile("D:/javascript/excel/file_example_XLSX_10.xlsx");

    const worksheet = workbook.getWorksheet("Sheet1");

    await readExcelTest(worksheet,searchText,replaceText);
    
    // then iteration each row

    await workbook.xlsx.writeFile(filePath);
}

// need the work sheeet details to pass read excel method

async function readExcelTest(worksheet, searchText,replaceText) {
    
    let output = { rownum:-1, columnNum:-1};

    worksheet.eachRow((row, rownum) =>  // row contains full data about row, rowmum each row num
    {
        
        row.eachCell((cell,colNum) =>
        {
            if(cell.value == searchText)
            {
                output.rownum= rownum;
                output.columnNum = colNum;

                const cell = worksheet.getCell(output.rownum, output.columnNum);
                cell.value = replaceText;
            }
        })
    })

}

writeecxceltest("United States", "TestCuba","D:/javascript/excel/write_file_example_XLSX_10.xlsx");

const{test, expect} = require ('@playwright/test');

// File Upload and Downlaod
//https://rahulshettyacademy.com/upload-download-test/

//Refactoring Excel nice methods

// where u find the  united states where age colum update 18



const ExcelJs = require('exceljs');

//let output = { rownum:-1, columnNum:-1}; // Java script Object 

async function writeecxceltest(searchText, replaceText, filePath) {

    //  create Object for the Excel clss and access Workbook Method

    const workbook = new ExcelJs.Workbook();

    // read Excel file with await keyword

    await workbook.xlsx.readFile(filePath);

    const worksheet = workbook.getWorksheet("Sheet1");

    await readExcelTest(worksheet,searchText,replaceText);
    
    // then iteration each row

    await workbook.xlsx.writeFile(filePath);
}

// need the work sheeet details to pass read excel method

async function readExcelTest(worksheet, searchText,replaceText) {
    
    let output = { rownum:-1, columnNum:-1};

    let priceIndex;

    worksheet.eachRow((row, rownum) =>  // row contains full data about row, rowmum each row num
    {
        
        row.eachCell((cell,colNum) =>
        {
            if (cell.value === "price") {
                  priceIndex = colNum;
            }

            if(cell.value == searchText)
            {

                // let agecell = row.getCell(ageIndex);
                // agecell.value ="18";

                output.rownum= rownum;
                output.columnNum = priceIndex;

                const cell = worksheet.getCell(output.rownum, output.columnNum);
                cell.value = replaceText;
            }
        })
    })

}

//writeecxceltest("Mango", "350", "C:/Users/BALAJI VINOTHINI/Downloads/download.xlsx");





test("FileUpload and Downlaod test", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/upload-download-test/");

    let searchText = "Mango";

    let updatedValue ="3500";
    
    // await page.waitForLoadState('load');   

    // await page.screenshot({path:'beforeupdate.png'});
    // Find the locator od Download Button

     // once before click the download button we need to wait until download complete
    const downloadpromiseWait = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: 'Download' }).click()
  ]);

    //downloadpromiseWait; // waiting until waite or promise is resolved (promise -pending, rjected, fullfilled)

    writeecxceltest(searchText, updatedValue, "C:/Users/BALAJI VINOTHINI/Downloads/download.xlsx");

    await page.locator("#fileinput").click();

    await page.locator("#fileinput").setInputFiles( "C:/Users/BALAJI VINOTHINI/Downloads/download.xlsx");

    await page.waitForLoadState('load');
    
    //Assertions using Screenshot
    
    await page.screenshot({path:'updatedexcel.png'});

    //Aseeertin using getBytest from Page

    const textelement = page.getByText(searchText);

    // find the particular row

    const desiredrow= page.getByRole('row').filter({has:textelement});

    // assertions

    await expect(desiredrow.locator("#cell-4-undefined")).toContainText(updatedValue);
    

});

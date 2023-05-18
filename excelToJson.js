const XLSX = require("xlsx");

const excelFilePath = "/Users/jenanzakarneh/Desktop/Book1.xlsx"; //place your file path here to test

const workbook = XLSX.readFile(excelFilePath);

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: "A" });

const columns = Object.values(jsonData[0]);
const rows = jsonData.slice(1).map((jd) => Object.values(jd));

const jsonResult = [];
rows.forEach((row) => {
  rowAsJson = {};
  for (let i = 0; i < columns.length; i++) rowAsJson[columns[i]] = row[i];
  jsonResult.push(rowAsJson);
});

const jsonString = JSON.stringify(jsonResult, null, 2);

console.log(jsonString);

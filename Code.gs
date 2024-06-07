function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function sendFormData(data) {
  const name = data.name;
  const date = data.date;
  const time = data.time;
  const message = `Name: ${name}\nDate: ${date}\nTime: ${time}`;

  GmailApp.sendEmail('classictaxiservicejorhat@gmail.com', 'Form Submission', message);
  return ContentService.createTextOutput('Data Received Successfully');
}

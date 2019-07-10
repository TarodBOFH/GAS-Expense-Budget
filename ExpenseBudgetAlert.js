var BUDGET_SHEET = '' // Google Sheet ID with the yearly budget
var MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var RECIPIENTS = ""; // Who's going to receive the emails
var SENDER_NAME = "No Reply <no-reply@your_domain>"; //sender's name / email
var REPLY_TO = "no-reply@your_domain"; //your reply-to email address
var EMAIL_SUBJECT = "Yearly Expenses Report"; //subject you want on the email

// A plain object to hold Expense Data
function Expense(paymentMethod, month, amount, description) {
  this.paymentMethod = paymentMethod;
  this.month = month;
  this.amount = amount;
  this.description = description;
}

//Builds and sends notifications based on the data inside BUDGET_SHEET above
function sendNotifications() {
  var spreadsheet = SpreadsheetApp.openById(BUDGET_SHEET);
  var currentMonth = new Date().getMonth();

  var nextMonth = currentMonth == 11 ? 0 : currentMonth + 1;
  var nextSecondMonth = currentMonth > 9 ? currentMonth - 10 : currentMonth + 2;
  var nextThirdMonth = currentMonth > 8 ? currentMonth - 9 : currentMonth + 3;
  
  if (!spreadsheet) Logger.log("File does not exist!");
  
  var expenses = [];
  var range = spreadsheet.getSheetByName('Yearly').getDataRange().getValues();
  
  for(var i = 0; i < range.length; i++) {
    var month = range[i][1];
    var _cur = range[i];
    expenses.push(new Expense(_cur[0], _cur[1], _cur[2], _cur[3]));
  }
  
  var body = "<b>Current Month Expenses</b>";
  body+="<ul>";
  expenses.filter(monthFilter(currentMonth)).forEach(function(expense) {
    body += ["<li><b>",expense.amount,"</b>for<b>",expense.description,"</b>paid by<b>",expense.paymentMethod,"</b></li>"].join(" ");
  });
  body+="</ul>";
  
  body += "<br /><b>Next Month Expenses</b>";
  body+="<ul>";
  expenses.filter(monthFilter(nextMonth)).forEach(function(expense) {
    body += ["<li><b>",expense.amount,"</b>for<b>",expense.description,"</b>paid by<b>",expense.paymentMethod,"</b></li>"].join(" ");
  });
  if (expenses.filter(monthFilter(nextMonth)).length == 0) body+="Yay! No expenses next month!";
  body+="</ul>";
  body+="<br />";
  body+="<i>Version 1.0 does not automatically transfer back funds to payments account from savings account. Please, take care of them manually!</i>";
 
  //Build mailopts
  var mailOpts = {
    "name": SENDER_NAME,
    "noReply": true,
    "reply-to": REPLY_TO,
    "htmlBody": body
  };
      
  MailApp.sendEmail(RECIPIENTS, EMAIL_SUBJECT, "", mailOpts);
                    
  Logger.log(body);
}

function log(data) {
  Logger.log(data);
}

function monthFilter(month) {
  return function (expense) {
    return expense.month === MONTH_NAMES[month];
  }
}

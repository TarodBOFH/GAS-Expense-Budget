# GAS-Expense-Budget
A simple Google Apps Script to send bugdet alerts via email based on a spreadsheet.

## Usage Instructions
The basic instructions provides you with a sheet you can copy that includes the basic script
The advanced instructions allows you to link with your own sheet and keep a separate script. If you know what you're doing, go for these instructions

### Basic
1. Create a copy of https://docs.google.com/spreadsheets/d/1IURgnLjAivPTwHcCjtlANPaFGl8X0pH8I-O-Qzfpey8 on your personal gdrive
1. Open the sheet and click on script editor.
1. Fill in the BUDGET_SHEET with the ID of the google sheet you just copied (the one on your drive)
1. Fill in the email properties
    1. RECIPIENTS to be your email address
    1. SENDER_NAME as per your preference
    1. REPLY_TO to be either your email address or a no-reply address in your domain
    1. EMAIL_SUBJECT as per your preference
1. Click on select function, select "sendNotifications" and click on the run icon `▶`
    1. Allow the app to run on your file by following Google's security prompts.
1. Verify your email. You should have received your first notification!
1. Go back to the budget sheet and modify the balues on the columns. Please keep month names in English (as per the dropdown validation) or update the script if you translate them.
1. Schedule the script to be run on your prefered basis by clicking on the `Current project triggers` icon (🕑).
    1. Click on `Add a trigger`
    1. Change `event source` to `Time-driven`
    1. Adjust your scheduling preferences

### Advanced
1. Copy the ExpenseBudgetAlert.js content into a new GAS project 
1. Create a spreadsheet with a sheet named `Yearly` and the layout (and month names) as this one https://docs.google.com/spreadsheets/d/1IURgnLjAivPTwHcCjtlANPaFGl8X0pH8I-O-Qzfpey8
1. Fill in the BUDGET_SHEET with the ID of the google sheet you just created
1. Fill in the email properties
    1. RECIPIENTS to be your email address
    1. SENDER_NAME as per your preference
    1. REPLY_TO to be either your email address or a no-reply address in your domain
    1. EMAIL_SUBJECT as per your preference
1. Click on select function, select "sendNotifications" and click on the run icon `▶`
    1. Allow the app to run on your file by following Google's security prompts.
1. Verify your email. You should have received your first notification!
1. Schedule the script to be run on your prefered basis by clicking on the `Current project triggers` icon (🕑).
    1. Click on `Add a trigger`
    1. Change `event source` to `Time-driven`
    1. Adjust your scheduling preferences

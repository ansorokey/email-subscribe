# email-subscribe
An email subscription form that submits to a google sheets backend

This project was made by following [How To Make Working Email Subscription Form With Google Sheets Using HTML CSS & JavaScript](https://youtu.be/a8Om25FbaJA?si=GZLHw-KryDXp3FdL)

[Google Sheets Script](https://github.com/jamiewilson/form-to-google-sheets.git)
- Credit to [Jamie Wilson](https://github.com/jamiewilson)

## Key Features and Technologies
- JavaScript, HTML, CSS
- Try/Catch
- Fetch
- Async/Await
- Form Submission
- Event Listeners
- Google Sheets
- Google App Scripts

## How To Use
Enter any email (a fake email is preferred, any format) in the input field.
Click the arrow button to submit.
A response will appear below the input indicating the submission status.
When successfully submitted, the email will be visible in a Google Sheets document along with other submitted emails.
View the Google Sheets document [here](https://docs.google.com/spreadsheets/d/1uXS4sX9zz3uBRi6xuDzZ-TqbMk0Np-1fiGcip4T6HKY/edit?usp=sharing)

## Future Features
- The response can take a few seconds, so a loading screen or animation would be nice
- Additional fields such as first name and last name
- Optional checkboxes that allow the user to choose what genre/type of emails to 'subscribe'
- Add email validation with Regex
- Prevent duplicate submissions (unique emails)

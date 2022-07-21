# React-Express-Nodemailer

The project implements a react-express application that enables a user to send form data as an email to a predefined email address.The mailing functionality is acheived using nodemailer a library which enables us to send emails from our application.

## Concepts

**1.React form**  
**2.Express Server**  
**3.Email functionality using Nodemailer**

## Getting Started

There are two methods for getting started with this repo.

**if you are familar with git:**  
Checkout this repo,install server and client dependancies dependencies, then start the gulp process with the following:
as follows

```
cd sendEmails_Using_Nodemailer/client
npm install
cd sendEmails_Using_Nodemailer
npm install
npm run dev

```

**if you are not familar with git:**  
Click here then download the .zip file. Extract the contents of the zip file, then open your terminal,
change to the project directory, and:

```
cd sendEmails_Using_Nodemailer/client
npm install
cd sendEmails_Using_Nodemailer
npm install
npm run dev

```

## Testing the app
 You need to enable the app use your email account to email the contents of the form. Here in our app the sender's account and receiver's email id's will be the same. You need to configure your email account by setting  "ALLOW LESS SECURE APPS" to "ON".If you are using a Gmail account like me you can navigate to the link https://myaccount.google.com/lesssecureapps and do so. and do so.

![googlee](https://user-images.githubusercontent.com/69896600/179836372-bb04280f-2ece-4ed6-ac2e-96b01babf0e4.png)

## Third-Party Disable
Before going ahead you must disable Gmail Third-Party security otherwise You request will not send from your MERN App to Gmail

![third-party-apps-access](https://user-images.githubusercontent.com/69896600/179834395-eabdb381-994a-4a63-b64c-7f1bca0e091b.png)




## Authors

- Ali Ahmad

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

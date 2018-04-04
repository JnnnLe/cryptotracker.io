# cryptotracker.io

Cryptotracker.io is the new way for cryptocurrency investors to create and manage their assets portfolio. This app allows users to add their current investments into their online portfolio and keep track of their current worth in the market, while also keeping them updated on current market trends, news, and commotion in the community.

As cryptocurrency is becoming more popular and people are interested in investing, our constituents need a easy way to manage all of their current and potential investments in one easy to use app. Currently, most other websites only allow you to track and manage the most popular currencies. However, our app allows users to track all currencies in one place and not just the top performers.


## Getting Started

In order to run this app on your local machine, please follow the following guidelines:

### Prerequisites

From the repository, copy the SSH link: ![clone](/imgs/clone.png)

In your Terminal/Bash, first cd into your desired location and then paste the following code:

`git clone git@github.com:maxjowett/cryptotracker.io.git`

### Installing

Once the repository is cloned to your local machine, cd into the root cryptotracker folder and run:

`npm install`

Once finished installing in the root folder, cd into the client folder and run the install again:

`cd client`

`npm install`

After all the installs are finished, cd back into the root folder and run the start command, as below:

`cd ..`

`npm start`

## User Experience

### When you first visit cryptotracker.io, users will have a variety of options to either explore the app or immediately get started building their portfolio. 

![landingpage](/imgs/landingpage.png)

### After logging in using the user's Google account, the user will be directed to their dashboard where they will see current news, Twitter feed, and the top 5 performers and losers.

![dashboard](/imgs/dashboard.png)

### The app offers users a coin lookup feature that allows users to search for a specific currency and will return to them data and graphs relevant to their search.

![coinlookup](/imgs/coinlookup.png)

### From the side navbar, the user can navigate to their portfolio where they will be able to see all currencies they have added to their portfolio. Users will also be able to add, delete, and edit their portfolio from this page.

![portfolio](/imgs/portfolio.png)

### Additionally, from the side navbar, users will have to opportunity to test currency conversions to better inform their investment decisions.

![converter](/imgs/converter.png)


## Code Samples

### Get & Post Methods + Redirect Used
![get-post methods](/public/assets/images/screenshots/Capture1.JPG)

### Login Authentication
![login authentication](/public/assets/images/screenshots/Capture2.JPG)

### Appending User Items
![Appending Items](/public/assets/images/screenshots/Capture3.JPG)

### Displaying User and Community Items
![Displaying Items](/public/assets/images/screenshots/Capture3.JPG)


## Deployment

Deployed with Heroku: **INSERT LINK HERE**


## Built With

* [Heroku](https://heroku.com/) - Heroku is a cloud platform as a service supporting several programming languages that is used as a web application deployment model.
* [React.js](https://reactjs.org/) - An open-source JavaScript library which is used for building user interfaces specifically for single page applications. It’s used for handling view layer for web and mobile apps. 
* [Bootstrap](https://bootstrapdocs.com/v4.0.0/) - Bootstrap is a frontend user experience we used to give our page a clean and user friendly appearance.
* [Nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.
* [Concurrently](https://www.npmjs.com/package/concurrently) - Run multiple commands concurrently.
* [Router](https://www.npmjs.com/package/router) - Simple middleware-style router.
* [Google Fonts](https://fonts.google.com/) - Google Fonts for users to select their own font.
* [bcrypt-nodejs](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies. 
* [BodyParser](https://www.npmjs.com/package/body-parser-json) - Node.js body parsing middleware. This does not handle multipart bodies, due to their complex and typically large nature. 
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
* [express](https://www.npmjs.com/package/express) - The Express philosophy is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs. Express does not force you to use any specific ORM or template engine. With support for over 14 template engines via Consolidate.js, you can quickly craft your perfect framework.
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) - As of version 3.x, Express got out of the business of being a generic view engine — this was a great decision — leaving developers to implement the concepts of layouts, partials, and doing file I/O for their template engines of choice.
* [express-session](https://www.npmjs.com/package/express-session) - Create a session middleware with the given options. Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side.
* [cookie-parser](https://github.com/expressjs/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
* [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [passport](https://www.npmjs.com/package/passport) - Passport is Express-compatible authentication middleware for Node.js. Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.
* [passport-google-oauth2](https://www.npmjs.com/package/passport-google-oauth2) - Passport strategies for authenticating with Google using ONLY OAuth 2.0. This module lets you authenticate using Google in your Node.js applications. By plugging into Passport, Google authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.
* [MongoDB](https://www.mongodb.com/) - a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas.
* [mongoose](http://mongoosejs.com/) - Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.



## Authors
* **Jennifer Lê** (https://github.com/JnnnLe)
* **Jordan Ketring** (https://github.com/jketring6)
* **Himaja Gattu** (https://github.com/himajagattu)
* **Max Jowett** (https://github.com/maxjowett)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

* Jerome Chennette (https://github.com/jeromechenette)
* Dani Roxberry (https://github.com/droxey) 
* Amber Burroughs (https://www.linkedin.com/in/amber-burroughs-29a69467)
* Abraham Ferguson (https://github.com/abrahamfergie)

Thank you for all of your help with debugging and directing our thought process!
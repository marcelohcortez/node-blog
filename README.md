## Node Blog

**LIVE DEMO: https://node-blog-pi.vercel.app**

Full Node.js project. Including 'about' page, blog content and blog post creation.
On the live project the creation of new posts is blocked for security reasons.

## Tech & 3rd party used in the project:
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Mongoose](https://mongoosejs.com/)

## Services & tools used in the project
- [Vercel](https://vercel.com/)
- [MongoDB](https://www.mongodb.com/)

# How to run the project:
- Clone the repository
- On the 'blogController.js' file, uncomment the block regarding the creation of new posts
- Edit the .env file to add your 'DBURI' with the database URL
- If you are not running the project on Vercel: 
  - Delete the file 'vercel.json'
  - Remove the last line on app.js file:
```bash
module.exports = app;
```

Start the server with Nodemon if you are in dev environment with:
```bash
npm run dev
```
If you are in production you can use the default command:
```bash
npm run start
```

**LIVE DEMO: https://node-blog-pi.vercel.app**
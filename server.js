const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });
mongoose.connect(process.env.MONGODB_URI || "mongodb://dkeefe:Cabinwifi248@ds251948.mlab.com:51948/heroku_w2m8558v");
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

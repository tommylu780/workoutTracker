const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://tommy-lu:10071995Ltt@cluster0.mg6ta.mongodb.net/workout", { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
 });

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
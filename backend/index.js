const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors()); // Enables CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parses JSON requests

// Your routes
app.use("/api/v1", require("./Route/authRoute"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

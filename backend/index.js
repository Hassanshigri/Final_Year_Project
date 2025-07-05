const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: '50mb' }));  
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/v1", require("./Route/authRoute"));
app.get('/', (req, res) => {
    res.send("Server Running 🏃‍♂️");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
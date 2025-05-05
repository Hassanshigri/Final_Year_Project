const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.json());

app.use("/api/v1", require("./Route/authRoute"));
app.get('/',(req,res)=>{
    res.send("Server Running 🏃‍♂️")
})

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

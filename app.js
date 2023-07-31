const express = require("express");
const router = require("./routers/routers.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use("/", router);

app.get("/", (req,res)=>{
    res.send("serve up");
});

app.listen(port,()=>{
    console.log(`server up on server ${port}`);
});


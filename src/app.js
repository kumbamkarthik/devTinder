const express = require('express');

const app = express(); 

//This will only handle get call to /user
app.get("/user",(req,res)=>{
    res.send({firstName: "Karthik", lastName: "Kumbam"});
})

app.post("/user",(req,res)=>{
    res.send("Data sucessfully saved to database");
})
app.delete("/user",(req,res)=>{
    res.send("Data sucessfully deleted from database");
}
);
app.listen(7777,() => {
    console.log('Server is running on the port 7777');
});

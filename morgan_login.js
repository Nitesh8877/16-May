const express=require('express');
const  morgan=require('morgan');

const app=express();
const port=2000;
app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send("Morgan Loggin App")
});

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});


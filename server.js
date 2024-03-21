const express=require('express');
const http=require('http');
const app=express();
const bodyParse=require('body-parser');
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json());
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text"name="title" placeholder="enterName"><input type="text" name="size" placeholder="enter size"><button type="submit">Submit</button</form>')
})
app.use('/product',(req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.size)
    res.redirect('/')
})
app.use('/get-postman',(req,res,next)=>{
    console.log(req.body);
    res.send('Received successfully')
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Hellow From / path</h1>')
})
app.listen(3000);

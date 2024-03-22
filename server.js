const express=require('express');
const http=require('http');
const app=express();
const router=require('./routes/admin')

const shopRouter=require('./routes/shop')


const bodyParse=require('body-parser');

app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json());

app.use('/admin',router)
app.use(shopRouter)

app.use((req,res)=>{
    res.status(404).send('<h1>Page not found</h1>');
})
app.listen(3000);















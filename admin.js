const express=require('express')

const app=express()

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/product" method="POST"><input type="text"name="title" placeholder="enterName"><input type="text" name="size" placeholder="enter size"><button type="submit">Submit</button</form>')
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
router.post('/get-postman',(req,res,next)=>{
    console.log(req.body);
    res.send(req.body)
})

module.exports=router
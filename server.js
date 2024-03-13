const http=require('http');
const server=http.createServer((req,res)=>{
    res.sendDate();
})
server.listen(3000);
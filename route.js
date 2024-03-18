const fs=require('fs');

const handler=(req,res)=>{
    if(req.url==="/"){
        res.write('<html>')
       res.write('<head></head>')
       res.write('<body>');
       let resName=fs.readFileSync('message.txt');
       res.write(`<p>${resName}</p>`)
       res.write('<form action="/message" method="POST"><input type="text" name="message" placeholder="enterName"><button type="submit">Submit</button</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
      }
      if(req.url==='/message' && req.method==='POST'){
          const body=[];
          req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk);
          })
          return req.on('end',()=>{
            const parseBody=Buffer.concat(body).toString();
            let name=parseBody.split('=')[1]
            fs.writeFile('message.txt',name,(error)=>{
              res.statusCode=302;
              res.setHeader('Location','/');
              res.write(name)
              return res.end();
            });
          })
      }
       res.write('<html>')
       res.write('<head></head>')
       res.write('<body>');
       res.write('<h1>Hellow from node.js</h1>')
        res.write('</body>')
        res.write('</html>')
}

module.exports=handler
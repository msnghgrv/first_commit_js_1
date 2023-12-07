const http= require('http')
const server= http.createServer((req, res)=>{
    console.log(req)
    if(req.url=== '/'){
        res.end('this is the home page')
    }
    if(req.url=== '/about'){
        res.end('this is the about page')
    }
    res.end(`page ain'
    t there`)

    
    
})
server.listen(1000) 
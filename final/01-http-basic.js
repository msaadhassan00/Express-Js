const http = require('http');
const {readFileSync} = require('fs');

// const homePage = readFileSync('./index.html')
const homePage = readFileSync('./navbar-app/index.html')
const js = readFileSync('./navbar-app/browser-app.js')
const logo = readFileSync('./navbar-app/logo.svg')
const style = readFileSync('./navbar-app/style.css')


const port = 5000;

const server = http.createServer((req,res)=>{
   // console.log(req.url);
    console.log(req.method);
    if( req.url === '/'){
        res.writeHead(200,{'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } 
   else if( req.url === '/styles.css'){
        res.writeHead(200,{'content-type': 'text/css'});
        res.write(style);
        res.end();	
    }
   else if( req.url === '/logo.svg'){
        res.writeHead(200,{'content-type': 'image/svg+xml'});
        res.write(logo);
        res.end();	
    }
   else if( req.url === '/browser-app.js'){
        res.writeHead(200,{'content-type': 'text/js'});
        res.write(js);
        res.end();	
    }

   else if( req.url === '/about'){
    res.writeHead(200,{'content-type': 'text/html'});
        res.write('<h1>Welcome to about page!</h1>');
        res.end();	
    }
    else{
        res.writeHead(404,{'content-type': 'text/html'});
        res.write('<h1>Wrong URL!</h1>');  
        res.end();
    }
 
})

server.listen(port)
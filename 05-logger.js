const logger = (req,res,next)=>{
    const url = req.url;
    const method = req.method;
    const time=  new Date().getFullYear()
    console.log(url,method,time);
    // res.send('Testing')
    next();
}


module.exports = logger;
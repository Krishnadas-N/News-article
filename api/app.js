const express = require('express');
const dotenv = require('dotenv')
const app = express();
const axios = require('axios')
const cors = require('cors');
const morgan = require('morgan');
dotenv.config()
const port = 3000 || process.env.PORT

app.use(cors({origin:'*'}));
app.use(morgan('combined'));

app.get('/news-articles',async(req,res,next)=>{
    try{
        console.log(process.env.API_KEY);
        let query = req.query.search && req.query.search.length>1? req.query.search :'apple'
        let url = `${process.env.NEWS_URL}?q=${query}&from=2024-07-25&to=2024-07-25&sortBy=popularity&apiKey=${process.env.API_KEY}`
        console.log(url);
        const result = await axios.get(url)
         return res.status(200).json(result.data.articles)
    }catch(err){
        next(err)
    }
})
app.use((err,req,res,next)=>{
    console.log(err.message)
    if(err && err.message){
        return res.status(500).json({success:false,message:err.message})
    }else{
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
})
app.listen(port,()=>{
    console.log("Port is listening on "+port);
})

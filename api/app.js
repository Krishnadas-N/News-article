const express = require('express');
const dotenv = require('dotenv')
const app = express();
const axios = require('axios')
const cors = require('cors')
dotenv.config()
const port = 3000 || process.env.PORT

app.use(cors({origin:'*'}))

app.get('/news-articles',async(req,res,next)=>{
    try{
        let url = `${process.env.NEWS_URL}?apiKey=${process.env.API_KEY}`
        if(req.query.search){
            url+=`&q=${req.query.search}`
        }
        const articles = await axios.get('url')
        console.log(articles)
    }catch(err){
        next(err)
    }
  
})
app.use((err,req,res,next)=>{
    console.log(err)
    if(err && err.message){
        return res.status(500).json({success:false,message:err.message})
    }else{
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
})
app.listen(port,()=>{
    console.log("Port is listening on "+port);
})

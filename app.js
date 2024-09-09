const express = require('express')

const app = express()

const router = express.Router()

router.get('/sayok',(req,res)=>{
    res.send('ok');
})
router.get('/sayhello',(req,res)=>{
    res.send('hello');
})

app.use(router)

app.get('/',(req,res)=>{
    res.send('天才')
})

app.listen('9000',()=>{
    console.log("server is running at http://127.0.0.1:9000");
})



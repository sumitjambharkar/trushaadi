const express = require('express');
const User = require('./model/User')
const app = express()
app.use(express.json())
const Port = 3001
app.get('/',(req,res) => {
    res.json({
        msge:"hey"
    })
})
app.post('/register',async(req,res) => {
    const user = await User.create(req.body)
    res.json({user})

})

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
})
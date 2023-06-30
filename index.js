const express = require('express')
const body_parser = require('body-parser')
const app = express()
const port = 3000
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Bruno:javascript77@cluster0.hsqxcqf.mongodb.net/brownow?retryWrites=true&w=majority")
const db = mongoose.connection
db.once("open", ()=>{console.log("conectamos ao mongo")})

const login_model = require("./database/login")
const cadastro_model = require("./database/cadastro")
const exp = require('constants')
const path = require('path')
app.use(express.static(path.join(__dirname, "/public")))
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))
app.get('/teste', (req, res) => {console.log('teste')
  res.send('Hello World!')
})
app.post ("/cadastro", (req, res)=>{
    // console.log(req.body); fazer o cadastro
 })








app.post ("/login", async (req, res)=>{
    console.log(req.body);
   const resultado = await login_model.findOne({email:req.body.logemail})
    console.log(resultado)
    if (req.body.logpass===resultado.senha){

        res.send('Voce logou')
    
    } else {
        // todo 
    }
})










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
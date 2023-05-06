const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const { request, response } = require('express')

const app = express()
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://rohith631:rohith123@cluster0.w0x1bfx.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)
client.connect()
const db = client.db("sdp")
const col = db.collection("RES")

app.get('/',(request,response) => {
  response.send('This is a Server')
})

app.post('/insert', (request,response) => {
  col.insertOne(request.body)
  console.log(request.body)
  response.send(request.body)
})

app.get('/check',(req,res)=>{
  console.log(req.query)
  async function find(){
    try{
      const result=await col.findOne({email:req.query.un})
      console.log(result)
      if(result == null)
      {
        res.send("FAIL")
      }
      else{
        if(req.query.pw == result.password)
        {
          res.send("PASS")
        }
        else
        {
          res.send("FAIL")
        }
      }
      
    }
    finally{}  
  }
  find().catch(console.dir)
})

app.listen(8080)
console.log("server started")
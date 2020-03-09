const express = require('express')
const cors = require('cors')
const postsCtrl = require('./controllers/postsController')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/posts', postsCtrl.getPosts)
app.put('/api/posts/:id')
, postsCtrl.editUser
const PORT = 3030
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})
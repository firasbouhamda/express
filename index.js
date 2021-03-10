//console.log('introduction to express');
const express = require ('express')
const app = express()
const port = 6060
const path= require ('path')
const verify =( req ,res ,next) => {
    var today = new Date();
    var day = today.getDay();
    var time = today.getHours();

 if(time < 9 || time >17|| day ==0 || day ==6){
     res.redirect('/error')
 }else {
     next();
 }
}
app.get('/error',(req,res)=>{
        res.type('html')
    res.sendFile(path.join(__dirname,'pages/error.html'))
})
app.use(verify)
app.use(express.static('pages'))

app.listen( 6060, (err)=>{
    err ? console.log(err) : console.log('the server is running on port 6060')
})

// create data

const user =[

    {
        name:'hani',
        laseName:'belhaj hamiad',
        id:'1',
    },
    {
        name:'motez ',
        laseName:'ben jeddi',
        id:'2',
    },

    {
        name:'yassin',
        laseName:'ben jaafer',
        id:'3',
    },

    {
        name:'ibtihel',
        laseName:'aroua',
        id:'4',
    },
];
console.log(user)

app.get('/user',(req,res)=>{
    res.json(user)
})

app.get('/user/:id',(req,res)=>{
  
    res.json(user.filter(user=>user.id ==parseInt(req.params.id)))

})





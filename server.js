const express = require('express');
const app= express();
require('dotenv').config();
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;
const dbupdateobject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
// Connect to Mongo
mongoose.connect(process.env.DATABASE_URL, dbupdateobject);
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', process.env.DATABASE_URL));
db.on('disconnected', () => console.log('mongo disconnected'));
db.on('open', () => {
    console.log('Connection made!');
});

app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const crudController = require('./controllers/crud.js');
app.use(crudController);



app.get('/',(req,res)=>{
	res.send("App is working");
})


app.listen(process.env.PORT,()=>{
	console.log('app is listening on '+ process.env.PORT)
})
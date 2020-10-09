import express from 'express';


const app = express();

app.use('/static', express.static('public')); //used to load the html file from the public folder

app.use(express.urlencoded({extended: false})); // this is just for the form 
app.use(express.json()) //this is for json


/*app.get('/profile', (req, res) =>{
  // req.query
  // req.body
  // req.header
  // req.params
  res.send("profile url");
});*/

app.get('/id',(req, res)=>{
  console.log(req.params)
  res.status(404).send("not found");
})

app.get('/json', (req, res) =>{
  const user = {
    name: 'Sally',
    hobby: 'snowboard'
  }
  res.send(user);
});

app.post('/profile', (req, res)=>{
  console.log(req.body)
  res.send('success');
});

app.listen(3000);



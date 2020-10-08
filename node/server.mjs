import express from 'express';

const app = express();
app.use((req, res, next)=>{
  console.log(<h1>hello</h1>)
  // it doesn't go on until it sees the next method
  next();
})

app.get('/profile', (req, res) =>{
  res.send("profile url");
});

app.get('/', (req, res) =>{
  const user = {
    name: 'Sally',
    hobby: 'snowboard'
  }
  res.send(user);
});
app.listen(3000);
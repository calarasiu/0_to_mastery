import fs from 'fs';
// readFile is an asynchronous function, that means is going to read the file from the path it receives and until is done the program can run the next lines of code
fs.readFile('./hello.txt',(error, data)=>{ 
  if(error){
    console.log('error');
  }
  console.log('1 readFile function - async',data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('2 readFileSync function', file.toString());


//APPEND - if the file we give as an argument doesn't exist - will be automatically created 
fs.appendFile('./hello.txt', 'the text you want to append', err =>{
  if(err){
    console.log(err);
  }
  console.log('3 added the text to the hello file')
})

const modifiedFile = fs.readFileSync('./hello.txt');
console.log('4 read the modified file', modifiedFile.toString());

//create and write a new file
fs.writeFile('bye.txt', 'the text to be added to the new file created', err =>{
  if(err){
    console.log(err);
  }
  console.log('5 bye file created');
})

//delete
fs.unlink('./bye', err=>{
  if(err){
    return err;
  }
  console.log('6 bye file deleted');
})

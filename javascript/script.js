var database = [
  {
  username: "cornelia",
  password: "123456"
}
];
var newsfeed = [
  {
    username: "Bobby",
    timeline: "I feel sleepy!"
  },
  {
    username: "Sarah",
    timeline: "Such an unproductive weekend"
  },
  {
    username: "Myke",
    timeline: "I learned javascript, cannot wait to use it in my projects!"
  }
];

function isUserValid(username, password){
  for (var i = 0; i<database.length; i++){
    if (username === database[i].username &&
      password === database[i].password){
        return true;
      };
  };
  return false;
};

function signIn(username, password){
  if (isUserValid(username, password)){
    console.log(newsfeed);
  } else {
    alert("Wrong username or password, please try again");
  };
};



var userNamePrompt = prompt("Username");
var pass = prompt("Password");
signIn(userNamePrompt, pass);
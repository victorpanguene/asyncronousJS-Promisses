//import axios from "axios";
// axios
//   .get("https://api.github.com/users/victorpanguene")
//   .then( res => axios.get(res.data.repos_url))
//   .then( name => console.log(name.data))
//   .catch( erro => console.log(erro))

// Promise.all([
//   axios.get('https://api.github.com/users/victorpanguene'),
//   axios.get('https://api.github.com/users/victorpanguene/repos')
// ])
// .then( res => {
//   console.log(res[0].data.login)
//   console.log(res[1].data.length)
// })
// .catch( err => console.log)

// Using async await, api fecth to get data from API
// Get user and repos list in a API

// fetch('https://api.github.com/users/victorpanguene')
// .then( response => response.json())
// .then( data => fetch(data.repos_url)
// .then( res => res.json())
// .then( d => console.log(d))
// .catch( err => console.log(err))
// )

// Doing the same thing using promisses

// start an asyncronous function
async function start() {
  // awaiting for my response and transforming it to JSON
  const response = await fetch("https://api.github.com/users/victorpanguene");
  const user = await response.json();

  // getting my repos list and transforming it to JSON
  const reposResponse = await fetch(user.repos_url);
  const repos = await reposResponse.json();
  console.log(repos);
}

start().catch((err) => console.log(err));

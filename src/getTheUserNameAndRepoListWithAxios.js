import axios from "axios";

async function getRepos() {
  try {
    const u = await axios.get("https://api.github.com/uers/victorpanguene");
    const r = await axios.get(u.data.repos_url);
    console.log(r.data);
  } catch (err) {
    console.log(err);
  }
}
getRepos();

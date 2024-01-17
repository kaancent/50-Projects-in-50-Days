const APIURL = "https://api.github.com/users/";
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios.get(APIURL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(APIURL + username + "/repos?sort=created");
    addRepostoCard(data);
  } catch (error) {
    createErrorCard("Problem fetching repositories");
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>following</strong></li>
            <li>${user.public_repos} <strong>repos</strong></li>
          </ul>

          <div id="repos">
           
          </div>
        </div>
      </div>`;

  main.innerHTML = cardHTML;
}

function addRepostoCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});

function createErrorCard(message) {
  const cardHTML = `<div class="card">
     <h1>${message}</h1>
    
    </div>`;

  main.innerHTML = cardHTML;
}

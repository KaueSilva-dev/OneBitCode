interface GithubUserResponse {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
  message?: "Not Found";
}

interface GithubRepoResponse {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

const users: GithubUserResponse[] = [];

async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user: GithubUserResponse = await response.json();

  if (user.message) {
    alert(`usuario não encontrado!`);
  } else {
    users.push(user);
    alert(`O usuario ${user.login} foi savlo\n
        id: ${user.id}\n
        login:${user.login}\n
        nome:${user.name}
        bio:${user.bio}
        Repositorios publicos:${user.public_repos}`);
  }
}

async function showUser(username: string) {
  const user = users.find((user) => user.login === username);

  if (typeof user === "undefined") {
    alert(`Usuario não encontrado`);
  } else {
    const response = await fetch(user.repos_url);
    const repos: GithubRepoResponse[] = await response.json();
    let message = `id: ${user.id}\n
        login:${user.login}\n
        nome:${user.name}\n
        bio:${user.bio}\n
        repositorios publicos:${user.public_repos}\n
        `;
    repos.forEach((repo) => {
      message +=
        `\nNome: ${repo.name}` +
        `\nDescrição: ${repo.description}` +
        `\nEstrelas: ${repo.stargazers_count}` +
        `\nÉ um fork: ${repo.fork ? "Sim" : "Não"}\n`;
    });
    alert(message);
  }
}

function showAllUsers() {
  let message = `Usuarios:\n`;

  users.forEach((user) => {
    message += `\n - ${user.login}`;
  });
  alert(message);
}

function showReposTotal() {
  const reposTotal = users.reduce(
    (accumulator, user) => accumulator + user.public_repos,
    0
  );

  alert(`O grupo possui um total de ${reposTotal} repositórios públicos!`);
}

function showTopFive() {
  const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos);
  let message = "Top 5 usarios com mais repositorios publicos";
  topFive.forEach((user, index) => {
    message += `\n ${index + 1} - ${user.login}: ${
      user.public_repos
    } repositorios`;
  });
  alert(message);
}

async function main() {
  await fetchUser("isaacpontes");
  await fetchUser("julianaconde");
  await fetchUser("pcaldass");
  await fetchUser("lucasqueirogaa");
  await fetchUser("frans203");
  await fetchUser("LeDragoX");

  await showUser("isaacpontes");
  await showUser("julianaconde");

  showAllUsers();
  showReposTotal();
  showTopFive();
}

main();


const GIT_URL = `https://api.github.com/repos/mswist/labs/contents${window.location.pathname}`

getDirectoriesFromGit(GIT_URL)
  .then(resp => { listDirectories(resp) })

//DEFINITIONS

async function getDirectoriesFromGit(url) {
  const response = await fetch(url);
  return response.json();
}

function listDirectories(gitContent) {
  //show only non-hidden folders and html files (except index)
  const directories = gitContent.filter(el => ((
      el.type == 'dir' && !el.name.startsWith('x')
    ) || (
      el.type == 'file' && el.name.endsWith('html') && el.name != 'index.html'
    )))
  directories.forEach(dir => { displayDirElement(dir) })
}

function displayDirElement(dir) {
  const href = document.createElement("a")
  href.textContent = dir.name
  href.href = `./${dir.name}`
  document.body.insertAdjacentElement("afterbegin", href)
}

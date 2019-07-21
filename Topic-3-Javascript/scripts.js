'use strict';

async function httpGetJSON(url, callback) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.error(error);
  }
}


function showJSRep(search) {
  const repositories = document.querySelector('ul');
  httpGetJSON(
    `https://api.github.com/search/repositories?q=JavaScript`,
    data => {
      data.items.forEach(repo => {
        let repository = document.createElement('li');
        let repositoryName = document.createElement('h2');
        let repositoryDescription = document.createElement('p');
        let repositoryURL = document.createElement('a');
        repositoryURL.setAttribute('href', repo.html_url);
        repositoryURL.appendChild(document.createTextNode(repo.name));
        repositoryName.appendChild(repositoryURL);
        repositoryDescription.appendChild(
          document.createTextNode(repo.description || '')
        );
        repository.appendChild(repositoryName);
        repository.appendChild(repositoryDescription);
        repositories.appendChild(repository);
      });
    }
  );
}

 showJSRep('');



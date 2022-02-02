const dark = document.querySelector('.Dark')

dark.addEventListener('click', function () {
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  })
let APIkey = "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"

function API (userName){
  
  let url = `https://api.github.com/users/${userName}`

  fetch(url)
  .then((response) =>
        response.json().then((data) => {
          document.querySelector('.pseudo').innerHTML = data.name
          document.querySelector('.identifiant').innerHTML = data.login
          document.querySelector('.dateCreation').innerHTML = data.created_at
          document.querySelector('.biographie').innerHTML = data.bio
          document.querySelector('.localisation').innerHTML = data.location

  console.log(data)
}))}

API('octocat')
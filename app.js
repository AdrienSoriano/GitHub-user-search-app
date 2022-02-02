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
          document.querySelector('.avatar').setAttribute('src', data.avatar_url)
          document.querySelector('.pseudo').innerHTML = data.name
          document.querySelector('.identifiant').innerHTML = `@`+data.login
          
          const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
          let date = new Date(data.created_at)
          let year = date.getFullYear();
          let day = date.getDate()
          document.querySelector('.dateCreation').innerHTML = "Joined" +" "+ day+" "+ month[date.getMonth()] + " "+ year
          document.querySelector('.biographie').innerHTML = data.bio
          if(data.bio == null){
            document.querySelector('.biographie').innerHTML = 'This profil has no bio.'
          }
          document.querySelector('.repos').innerHTML = data.public_repos
          document.querySelector('.followers').innerHTML = data.followers
          document.querySelector('.following').innerHTML = data.following
          document.querySelector('.localisation').innerHTML = data.location
          document.querySelector('.twitter').innerHTML = data.twitter_username
          if (data.twitter == null){
            document.querySelector('.twitter').innerHTML = 'Not available'
          }
          document.querySelector('.web').innerHTML = data.blog
          document.querySelector('.building').innerHTML = data.company

}))}

API('octocat')

const search = document.querySelector('button')

search.addEventListener('click', function User (userName){
  
  let input = document.querySelector('input')
  let inpValue = input.value
  

      API('user')
})


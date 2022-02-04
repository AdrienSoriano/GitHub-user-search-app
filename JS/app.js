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
          /*data = {
            "login": "octocat",
            "id": 583231,
            "node_id": "MDQ6VXNlcjU4MzIzMQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/octocat",
            "html_url": "https://github.com/octocat",
            "followers_url": "https://api.github.com/users/octocat/followers",
            "following_url": "https://api.github.com/users/octocat/following{/other_user}",
            "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
            "organizations_url": "https://api.github.com/users/octocat/orgs",
            "repos_url": "https://api.github.com/users/octocat/repos",
            "events_url": "https://api.github.com/users/octocat/events{/privacy}",
            "received_events_url": "https://api.github.com/users/octocat/received_events",
            "type": "User",
            "site_admin": false,
            "name": "The Octocat",
            "company": "@github",
            "blog": "https://github.blog",
            "location": "San Francisco",
            "email": null,
            "hireable": null,
            "bio": null,
            "twitter_username": null,
            "public_repos": 8,
            "public_gists": 8,
            "followers": 4721,
            "following": 9,
            "created_at": "2011-01-25T18:44:36Z",
            "updated_at": "2022-01-24T15:08:43Z"
          }*/
          let error = document.querySelector('.error')
          if(data.message){
            error.style.visibility = 'visible'
            
          }
          else{
            error.style.visibility = 'hidden'
           
          
          document.querySelector('.avatar').setAttribute('src', data.avatar_url)
          document.querySelector('.pseudo').innerHTML = data.name
          if(data.name == null){
            document.querySelector('.pseudo').innerHTML = data.login
          }
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
          let localisation = document.querySelector('.localisation')
            let LocalisationIcon = document.querySelector('.icone-nav')
          if (data.location == null){
            
            localisation.innerHTML = 'Not available'
            localisation.style.opacity = '50%'
            LocalisationIcon.style.opacity = '50%'
          }
          else{
            localisation.style.opacity = '100%'
            LocalisationIcon.style.opacity = '100%'
          }
          document.querySelector('.twitter').innerHTML = data.twitter_username
          if (data.twitter == null){
            let Twitter = document.querySelector('.twitter')
            let TwitterIcon = document.querySelector('.icone-twitter')
            Twitter.innerHTML = 'Not available'
            Twitter.style.opacity = '50%'
            TwitterIcon.style.opacity = '50%'
          }
          else{
            Twitter.style.opacity = '100%'
            TwitterIcon.style.opacity = '100%'
          }
          let Blog = document.querySelector('.web') 
          let BlogIcon = document.querySelector('.icone-web')
          
          if (data.blog == ''){
            
            Blog.innerHTML = 'Not available'
            Blog.style.opacity = '50%'
            BlogIcon.style.opacity = '50%'
            let href = Blog.getAttribute("href")
          href = data.blog
            Blog.setAttribute('href', '.')
            Blog:hover.style.cursor = 'default'
            
          }
          else{
            Blog.style.opacity = '100%'
            BlogIcon.style.opacity = '100%'
            Blog.innerHTML = data.blog
          let href = Blog.getAttribute("href")
          href = data.blog
            Blog.setAttribute('href', href)
            
          }
            let Company = document.querySelector('.building')
            let CompanyIcon = document.querySelector('.icone-building')
            Company.innerHTML = data.company
          if (data.company == null){
            
            Company.innerHTML = 'Not available'
            Company.style.opacity = '50%'
            CompanyIcon.style.opacity = '50%'
          }
          else{
            Company.style.opacity = '100%'
            CompanyIcon.style.opacity = '100%'
          }
        }
         

}))}

API('octocat')

const search = document.querySelector('button')

search.addEventListener('click', function User (userName){
  
  let input = document.querySelector('input').value
  
      API(input)
})
const searchClick = document.querySelector('.searchClick')

searchClick.addEventListener('click', function Clicker (userName){
  let input = document.querySelector('input').value

      API(input)
})
let input = document.querySelector('input')

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {

    console.log(e);
      API(input.value)
  }
})

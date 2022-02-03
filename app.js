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
          if (data.location == null){
            let localisation = document.querySelector('.localisation')
            localisation.innerHTML = 'Not available'
          }
          document.querySelector('.twitter').innerHTML = data.twitter_username
          if (data.twitter == null){
            let Twitter = document.querySelector('.twitter')
            Twitter.innerHTML = 'Not available'
          }
          let Blog = document.querySelector('.web') 
          if (data.blog == null){
            Blog.innerHTML = 'Not available'
          }
          else{
            Blog.innerHTML= data.blog
          }
            let Company = document.querySelector('.building')
            Company.innerHTML = data.company
          if (data.company == null){
            Company.innerHTML = 'Not available'
          }
          console.log(data);
         

}))}

API('octocat')

const search = document.querySelector('button')
let error = document.querySelector('.error')
search.addEventListener('click', function User (userName){
  
  let input = document.querySelector('input').value
  if(data.message){
    error.style.visibility = 'visible'
   
  }
      API(input)
})
console.log(error);
const searchClick = document.querySelector('.searchClick')

searchClick.addEventListener('click', function Clicker (userName){
  let input = document.querySelector('input').value

      API(input)
})


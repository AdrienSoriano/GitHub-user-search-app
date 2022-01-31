const dark = document.querySelector('.Dark')

dark.addEventListener('click', function () {
    let body = document.getElementById("body");
    let currentClass = body.className;
    body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
  })

const lightDark = document.querySelector('sun')

lightDark.addEventListener('click', function () {
  let body = document.getElementById("body");
  let currentClass = body.className;
  body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
})

const darkLight = document.querySelector('moon')

darkLight.addEventListener('click', function () {
  let body = document.getElementById("body");
  let currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
})
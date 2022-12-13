const hamburgerIcon = document.getElementById('hamburger-icon');
const menuList = document.querySelector('.nav-links');


hamburgerIcon.addEventListener('click', () => {
  menuList.classList.toggle('active');

})

let links = menuList.querySelectorAll('.links');
links.forEach(link => {
  link.addEventListener('click', () => {
    if(menuList.classList.contains('active')){
      menuList.classList.remove('active');
    }else{
      menuList.classList.add('active');
    }
  })
})
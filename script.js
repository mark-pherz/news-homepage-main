const openMenuIcon = document.querySelector('.icon-menu-open');
openMenuIcon.addEventListener('click', () => {
  document.querySelector('.nav-mobile').classList.add("active");
})

const closeMenuIcon = document.querySelector('.icon-menu-close');
closeMenuIcon.addEventListener('click', () => {
  document.querySelector('.nav-mobile').classList.remove("active");
})
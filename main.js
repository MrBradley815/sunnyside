const hamburgerMenu = document.querySelector('.mobile-menu')

hamburgerMenu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
  if (hamburgerMenu.classList.contains('active')) {
    hamburgerMenu.classList.remove('active')
  } else {
    hamburgerMenu.classList.add('active')
  }
}
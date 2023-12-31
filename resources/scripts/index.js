
const searchInput = document.getElementById("search-box")
const navbarList = document.getElementById("navbar-menu")
let isClicked = true;

function toggleInput(){
    if(isClicked)
    {
        searchInput.style.display = 'block';
        navbarList.style.display = 'block';
        isClicked = false;
    }else{
        searchInput.style.display = 'none';
        navbarList.style.display = 'none';
        isClicked = true;
    }
};

const dropdownList = document.getElementById("dropdown-menu")
const navbarLink = document.getElementById("navbar-menu")
let onClicked = true;

function dropdown(){
    if(onClicked){
        dropdownList.style.display = 'block';
        navbarLink.style.display = 'block';
        onClicked = false;
    }else{
        dropdownList.style.display = 'none';
        navbarLink.style.display = 'none';
        onClicked = true;
    }
};

const ScrollToTopButton = document.getElementById("ScrollToTop");

window.addEventListener("scroll", toggleScrollToTopButton);
ScrollToTopButton.addEventListener("click", scrollToTop);

function toggleScrollToTopButton() {
  if (window.scrollY <300) {
    ScrollToTopButton.style.display = "none";
  } else {
    ScrollToTopButton.style.display = "block";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


const searchInput = document.getElementById("search-box")
const  isClicked = true;

function toggleInput(){
    if(isClicked)
    {
        searchInput.style.display = 'block';
        isClicked = false;
    }else{
        searchInput.style.display = 'none';
        isClicked = true;
    }
};


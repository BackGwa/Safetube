
document.onkeydown()

function goSearch(){
    query = document.getElementById("search").value;
    if(query) location.href = `https://www.youtube.com/results?search_query=${query}`;
}

function enterSearch(e){
    if(e.keyCode == 13){
        goSearch();
        return false;
    } else return true;
}
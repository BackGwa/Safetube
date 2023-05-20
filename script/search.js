
function gosearch(){
    query = document.getElementById("search").value;
    if(query) location.href = `https://www.youtube.com/results?search_query=${query}`;
}
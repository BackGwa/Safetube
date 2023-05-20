
function gosearch(){
    query = document.getElementById("search").value;
    location.href = `https://www.youtube.com/results?search_query=${query}`;
}
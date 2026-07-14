async function openPost(post) {
    
    const response = await fetch("blog/" + post + ".html");
    
    const html = await response.text();
    
    document.getElementById("blog").innerHTML = html;

}
async function openPost(post) {

    const resposta = await fetch("blog/" + post + ".html");

    const html = await resposta.text();

    document.getElementById("blog").innerHTML = html;

}
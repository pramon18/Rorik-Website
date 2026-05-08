function saudacao() {
    console.log("Sou um arquivo JavaScript legal!!!");
    console.log("Você está no site rorik.com.br");
    console.log("Em breve mais conteúdos para você.");
}
saudacao();

// function teste(){
//     setInterval(function() {
//         console.log("Teste Aleatóriedade: ", Math.random() > 0.5 ? "Cara" : "Coroa");
//     }, 3000);
// }
// teste();

// Penso em colocar aqui a parte de DVD bounce usando canvas
// Talvez a parte do reddit place também
// Provavelmente vou ter que separar em arquivos diferentes mais para frente

document.getElementById("logo_DVD").style.cursor = "pointer";
document.getElementById("logo_DVD").setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg");
document.getElementById("logo_DVD").setAttribute("alt", "Logo DVD");

document.getElementById("logo_DVD").addEventListener("click", function() {
    alert("Você clicou na imagem do DVD!");
});
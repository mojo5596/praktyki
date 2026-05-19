//ZEGAR
const zegar = document.getElementById("zegar");
function godzina(){
    const data = new Date();
    const godzina = String(data.getHours()).padStart(2, '0');
    const minuta = String(data.getMinutes()).padStart(2, '0');
    const sekunda = String(data.getSeconds()).padStart(2, '0');
    zegar.innerText = godzina + ":" + minuta + ":" + sekunda;
}
setInterval(godzina, 1000);
godzina();
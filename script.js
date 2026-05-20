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

//GUZIK DARK MODE
const guzik = document.querySelector('#guzik1');
const body = document.querySelector('body');

guzik.addEventListener('click', function darkmode(){
    body.classList.toggle('dark-mode')
})

const menu = document.querySelector('#guzik-menu');
const lewy = document.querySelector('#left');

menu.addEventListener('click', function menu1(){
    lewy.classList.toggle('active')
})
function f1(){
let don = parseInt(document.getElementById("dane").value);
let wys = document.getElementById("wys")
wys.innerHTML = "Liczba potrzebnych puszek: " + don * 4;
}
function f2() {
    let powierzchnia = +document.getElementById('dane').value
    let wynik = document.getElementById('wys')
    wynik.innerHTML = "Liczba potrzebnych puszek: " + Math.abs(Math.ceil(powierzchnia / 4))
}
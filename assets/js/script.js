const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

var body = document.getElementById("body");

if (hr >= 6 && hr < 12) {
    body.classList.add("dia");
    exibirMensagem();
    var relogioDivs = document.querySelectorAll('.relogio div');
    relogioDivs.forEach(function(elemento) {
    elemento.style.backgroundColor = "rgb(241, 253, 169)";
    elemento.style.color = "#595959";
    });

} else {
    body.classList.remove("dia");
    var mensagem = document.getElementById("mensagem");
    mensagem.style.display = "none";
}

if (hr >= 12 && hr < 18) {
    body.classList.add("tarde");
    exibirMensagem1();
    var relogioDivs = document.querySelectorAll('.relogio div');
    relogioDivs.forEach(function(elemento) {
    elemento.style.backgroundColor = "rgb(63, 196, 114)";
    });


} else {
    body.classList.remove("tarde");
    var mensagem1 = document.getElementById("mensagem1");
    mensagem1.style.display = "none";
}

if ((hr >= 18 && hr < 24) || (hr >= 0 && hr < 6)) {
    body.classList.add("noite");
    exibirMensagem2();
    var relogioDivs = document.querySelectorAll('.relogio div');
    relogioDivs.forEach(function(elemento) {
    elemento.style.backgroundColor = "gray";
    elemento.style.color = "#454141";
    });
    

} else {
    body.classList.remove("noite");
    var mensagem2 = document.getElementById("mensagem2");
    mensagem2.style.display = "none";
    }
})

function exibirMensagem() {
    var mensagem = document.getElementById("mensagem");
    mensagem.style.display = "block";
}

function exibirMensagem1() {
    var mensagem1 = document.getElementById("mensagem1");
    mensagem1.style.display = "block";
}

function exibirMensagem2() {
    var mensagem2 = document.getElementById("mensagem2");
    mensagem2.style.display = "block";
}


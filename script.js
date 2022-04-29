// transformmando 1 em 01
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Criando intervalo e Horário atual
const interval = setInterval(() => {
  const now = new Date();

  // Data conforme dd/mm/aaaa
  const dataHora =
    zeroFill(now.getUTCDate()) +
    "." +
    zeroFill(now.getMonth() + 1) +
    "." +
    now.getFullYear() +
    " " +
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  document.getElementById("data-hora").innerHTML = dataHora;
}, 1000);

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milésimos valem 1 segundo?
var cron;

//cronômetro
function start() {
  cron = setInterval(() => {
    timer();
  }, tempo);
}

//Para o cronômetro mas não reseta
function pause() {
  clearInterval(cron);
}

// reseta
function stop() {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;

  document.getElementById("counter").innerText = "00:00:00";
}

//Faz a contagem do tempo e exibição
function timer() {
  ss++; //adiciona +1 na variável ss

  if (ss == 59) {
    // se for igual a 59 segundos
    ss = 0;
    mm++;

    if (mm == 59) {
      mm = 0;
      hh++;
    }
  }

  var format =
    (hh < 10 ? "0" + hh : hh) + //se Hora for MENOR que 10 e a condição for verdadeira será adicionado 0 em Hora (09:00:10)
    ":" +
    (mm < 10 ? "0" + mm : mm) +
    ":" +
    (ss < 10 ? "0" + ss : ss);

  //selecionado o COUNTER irá exibir o valor formatado (acima) na tela.
  document.getElementById("counter").innerText = format;

  return format;
}

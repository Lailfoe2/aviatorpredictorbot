function predecir() {
  document.getElementById("predictionResult").innerHTML = "";
  var num = (Math.floor(Math.random() * 80) + 200) / 75;
  setTimeout(function() {
    document.getElementById("predictionResult").innerHTML = num.toFixed(2) + "x";
    document.getElementById("predictionResult").innerHTML = valorPredicho;

  }, 2000);
  var i = 0;
  var interval = setInterval(function() {
    if (i >= num * 100) {
      clearInterval(interval);
    } else {
      i++;
      document.getElementById("predictionResult").innerHTML = (i / 100).toFixed(2) + "x";
    }
  }, 5);
}

var canPredict = true;
function predecir() {
  if (!canPredict) {
    var alerta = document.createElement("div");
    alerta.setAttribute("class", "alerta");
    alerta.innerHTML = "No puedes predecir. Debes esperar al menos 20 segundos antes de poder hacer otra predicción.";
    document.body.appendChild(alerta);
    setTimeout(function() {
      document.body.removeChild(alerta);
    }, 3000);
    return;
  }
  canPredict = false;
  setTimeout(function() {
    canPredict = true;
  }, 20000);
  document.getElementById("predictionResult").innerHTML = "";
  var num = (Math.floor(Math.random() * 75) + 200) / 85;
  setTimeout(function() {
    document.getElementById("predictionResult").innerHTML = num.toFixed(2) + "x";
  }, 2000);
  var i = 0;
  var interval = setInterval(function() {
    if (i >= num * 100) {
      clearInterval(interval);
    } else {
      i++;
      document.getElementById("predictionResult").innerHTML = (i / 100).toFixed(2) + "x";
    }
  }, 5);
}

// Agregamos estilo para la alerta
var estiloAlerta = document.createElement("style");
estiloAlerta.innerHTML = ".alerta { background-color: #F4D03F; color: #000; font-size: 1.5em; font-weight: bold; padding: 20px; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; border: 4px solid #FF4136; border-radius: 10px; box-shadow: 5px 5px 15px #FF4136; text-align: center; font-family: 'Open Sans', sans-serif; }";
document.head.appendChild(estiloAlerta);

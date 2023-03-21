setTimeout(function() {
    var anuncio = document.createElement("div");
    anuncio.setAttribute("class", "anuncio");
    var closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "closeBtn");
    closeBtn.innerHTML = "X";
    closeBtn.onclick = function() { anuncio.style.display = "none"; }
    anuncio.appendChild(closeBtn);
    var title = document.createElement("h2");
    title.innerHTML = "¡Consigue la versión PREMIUM de Aviator Predictor!";
    anuncio.appendChild(title);
    var subtitle = document.createElement("p");
    subtitle.innerHTML = "";
    anuncio.appendChild(subtitle);
    var buyBtn = document.createElement("button");
    buyBtn.setAttribute("class", "buyBtn");
    buyBtn.innerHTML = "COMPRAR AHORA";
    buyBtn.onclick = function() { window.location.href = "servicios.html"; }
    anuncio.appendChild(buyBtn);
    document.body.appendChild(anuncio);
  }, 15000);

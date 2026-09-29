
const ventilador = document.getElementById("ventilador");
const botao = document.getElementById("botao");


botao.addEventListener("click", function() {

    if (ventilador.classList.contains("ligado")) {

        ventilador.classList.remove("ligado");

        botao.textContent = "Ligar";
        
    } else {
        ventilador.classList.add("ligado");
        
        botao.textContent = "Desligar";

    }

});

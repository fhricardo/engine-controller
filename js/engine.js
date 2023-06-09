/******************************************************************************
JavaScript para Acionamento de Motor JS
Professor Flávio Ricardo
Abril de 2023
Curso de Webdesign Front-end | Escola SENAI "Professor Vicente Amato"
Jandira/SP
******************************************************************************/

// Declara a variável power como false - energia desligada
var power = false;

// Função da Chave Geral
function general(on) {
    if (on == 0) {
        power = false;
        powerswitch = "assets/btn-general-off.png";
        powerlight = "assets/red-light-off.png";
        generalSw.setAttribute("onclick", "general(1)");
        motor.setAttribute("class", "motor-off");
        light = "assets/green-light-off.png";
        motor.setAttribute("class", "motor-off");
    }
    if (on == 1) {
        power = true;
        powerswitch = "assets/btn-general-on.png";
        powerlight = "assets/red-light-on.png";
        generalSw.setAttribute("onclick", "general(0)");
    }
    document.getElementById("generalSw").src = powerswitch;
    document.getElementById("redLight").src = powerlight;
    document.getElementById("greenLight").src = light;
}

// Função de Acionamento do Motor
function controller(start) {
    if (power == true) {
        if (start == 0) {
            light = "assets/green-light-off.png";
            motor.setAttribute("class", "motor-off");
        }
        if (start == 1) {
            light = "assets/green-light-on.png";
            motor.setAttribute("class", "motor-on");
        }
        document.getElementById("greenLight").src = light;
    }
}
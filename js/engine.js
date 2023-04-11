var power = false;

function general(on) {
    if (on == 0) {
        power = false;
        powerswitch = "assets/btn-general-off.png";
        powerlight = "assets/red-light-off.png";
        generalSw.setAttribute("onclick", "general(1)");
        motor.setAttribute("class", "motor-off");
        if (power == false) {
            light = "assets/green-light-off.png";
            motor.setAttribute("class", "motor-off");
            document.getElementById("greenLight").src = light;
        }
    }
    if (on == 1) {
        power = true;
        powerswitch = "assets/btn-general-on.png";
        powerlight = "assets/red-light-on.png";
        generalSw.setAttribute("onclick", "general(0)");

    }
    document.getElementById("generalSw").src = powerswitch;
    document.getElementById("redLight").src = powerlight;
}

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
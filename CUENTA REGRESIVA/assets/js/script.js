 function obtenerTiempoFaltante(fechaLimite)
{
    let ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horaFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horaFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }

};

let papaStop = document.getElementById("papaNoelStop");
let botonAudio = new Audio('./assets/sound/allWant.mp3');
let botonPlay = document.getElementById("play");
let botonPause = document.getElementById("pause");

botonPlay.disabled = true;
botonPause.disabled = true;

function song(btn) {
  if (btn == 1) {
    botonAudio.play();
  } else {
    botonAudio.pause();
  }
}


function cuentaRegresiva(tiempoFaltante)
{
    const titulo = document.getElementById("titulo");
    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");
    let btn_1 = document.getElementById("play")
    let btn_2 = document.getElementById("pause")

    const tiempoActual = setInterval(() =>
    {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        

        if (t.tiempoFaltante < 1)
        {
            clearInterval(tiempoActual);
            let mensaje_ = "¡Feliz Navidad!"
            titulo.textContent = mensaje_;
            papaStop.classList.add("on");
            botonPlay.disabled = false;
            botonPause.disabled = false;
            dias.innerHTML = "00";
            horas.innerHTML = "00";
            minutos.innerHTML = "00";
            segundos.innerHTML = "00";
            btn_1.classList.add("bt")
            btn_2.classList.add("bt")

            
        }else{
        dias.innerHTML = t.diasFaltantes;
        horas.innerHTML = t.horaFaltantes;
        minutos.innerHTML = t.minutosFaltantes;
        segundos.innerHTML = t.segundosFaltantes;
        }
       
    }, 1000);
}

cuentaRegresiva('Nov 22 2023 16:35:00')
let insertTime = document.getElementById("insertTime");
let insertDate = document.getElementById("insertDate");
let flightNumber = document.getElementById("flightNumber");
let terminalNumber = document.getElementById("terminalNumber");




// // Crear un elemento de ventana emergente
// var popup = document.createElement("div");

// // Establecer el contenido de la ventana emergente
// popup.innerHTML = "<div class=contenerdor><p>Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténganse atento a los avisos mediante esta plataforma.</p><button id='close'>Close</button></div>";

// // popup.classList.add("popup");

// document.body.appendChild(popup);

// // Cerar
// var closeButton = document.getElementById("close");
// closeButton.addEventListener("click", function() {
//   popup.style.display = "none";
// });


  

  




// Hora Actual
function updateClock() {
    let currentTime = new Date();
    let formattedTime = currentTime.toLocaleTimeString();
    insertTime.innerHTML = formattedTime;
}

setInterval(updateClock, 1000);

// Fecha Actual
function updateDate() {
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' });
    insertDate.innerHTML = formattedDate;
}

setInterval(updateDate, 1000);

// Actualización de Vuelo y Terminal 

window.onload = function() {
    let randomVuelo = Math.floor(Math.random() * 9000) + 1000;
    let randomTerminal = Math.floor(Math.random() * 100);
    flightNumber.innerHTML = randomVuelo;
    terminalNumber.innerHTML = randomTerminal;

}
  

window.addEventListener('load', function() {
    function mostrarVentanaEmergente() {
        // Crea un elemento div para la ventana emergente y añade las clases necesarias
        const popup = document.createElement('div');
        popup.classList.add('popup');

        // Crea un elemento div para el contenido de la ventana emergente y añade las clases necesarias
        const popupContainer = document.createElement('div');
        popupContainer.classList.add('popupContainer');

        // Crea un elemento p para el mensaje de la ventana emergente y añade el texto
        const message = document.createElement('p');
        message.textContent = 'Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténganse atento a los avisos mediante esta plataforma.';

        // Crea un elemento button para cerrar la ventana emergente y añade las clases necesarias
        const closeButton = document.createElement('button');
        closeButton.classList.add('close');
        closeButton.textContent = 'Close';

        // Añade el mensaje y el botón al contenedor de la ventana emergente
        popupContainer.appendChild(message);
        popupContainer.appendChild(closeButton);

        // Añade el contenedor de la ventana emergente al elemento de la página body
        document.body.appendChild(popup);
        popup.appendChild(popupContainer);

        // Establece un evento de clic en el botón de cerrar para eliminar la ventana emergente
        closeButton.addEventListener('click', function() {
            popup.remove();
});

    }

    mostrarVentanaEmergente();
});

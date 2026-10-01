document.addEventListener("DOMContentLoaded", () => {

    // Seleccionamos todos los botones que realizan el flip
    const flipButtons = document.querySelectorAll(".flip-btn");

    // Agregamos el evento click a cada botón
    flipButtons.forEach((button) => {

        button.addEventListener("click", () => {

            // Buscamos la tarjeta a la que pertenece el botón
            const cardContainer = button.closest(".card-flip-container");

            // Buscamos el elemento que contiene las dos caras
            const cardInner = cardContainer.querySelector(".card-flip-inner");

            // Agregamos o quitamos la clase que realiza el giro
            cardInner.classList.toggle("is-flipped");

        });

    });

});

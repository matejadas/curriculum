window.addEventListener("load", () => {

    let boton = document.getElementById("pdf");
    
    boton.addEventListener("click", () => {
        console.log("Botón PDF pulsado.")
        window.print();
    });

});
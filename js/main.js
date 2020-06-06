//Se mapean los botones de la vista
button_confundido = document.getElementById('confundido');
button_tranquilo = document.getElementById('tranquilo');
button_feliz = document.getElementById('feliz');
button_analizo = document.getElementById('analizo');
button_creativo = document.getElementById('creativo');
button_triste = document.getElementById('triste');


//Funcion para añadir clase .active y colocar el fondo.
button_group = document.getElementsByClassName("button");

for (i = 0; i < button_group.length; i++) {
    button_group[i].addEventListener("click", function() {
        this.classList.toggle("active");
        if (this.classList.contains('active')) {
            this.style.backgroundImage = 'url("../imgs/trace1.png")';
        }
    });
}
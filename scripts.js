const form = document.querySelector(".formulario-fale-conosco")
const mascara= document.querySelector(".mascara-formulario")


function mostrarForm() {

    form.style.left = "78vw"
    form.style.transform = "translateX(-200%)"
    form.style.top ="28%" 
    mascara.style.visibility = "visible"
    }
    function esconderForm() {

        form.style.left = "-250vw"
        form.style.transform = "translateX(0)"
        form.style.top ="30%" 
        mascara.style.visibility = "hidden"
    }





















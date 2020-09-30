
function crear() {
    var numero = document.getElementById("numero").value;
    tabla = " <table class='table table-bordered table-striped'>";
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th scope='col'>Multiplicacion</th>";
    tabla += "<th scope='col'>Resultado</th>";
    tabla += "</tr>";
    tabla += "</thead>";
    for (var i = 1; i <= 10; i++) {
        tabla += "<tbody>";
        tabla += "<td>" + numero + "x" + i + "</td>";
        tabla += "<td>" + (numero * i) + "</td>";
        tabla += "</tr>";
        tabla += "</tbody>";

    }
    tabla += "</table>";
    document.getElementById("resultado").innerHTML = tabla;
}
function borrar() {
    document.getElementById("resultado").innerHTML = "";
}

function EventoAlert() {
    var nombre = document.getElementById("nombre").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    imc = peso / (altura * altura);
    console.log(imc);
    if (imc >= 18.5 & imc  <= 24.9) {

        Swal.fire({
            icon: 'success',
            title: 'Indice De Masa Corporal',
            text: 'Saludable',

        }).then((result) => {
            if (result.value) {
                window.location = 'Masa.html';
            }
        });

    }else if (imc >= 25 && imc <=29.9 ) {

        Swal.fire({
            icon: 'info',
            title: 'Indice De Masa Corporal',
            text: 'Sobre Peso ',

        }).then((result) => {
            if (result.value) {
                window.location = 'Masa.html';
            }
        });
    }else if (imc >= 30 && imc <= 39.9 ) {

        Swal.fire({
            icon: 'warning',
            title: 'Indice De Masa Corporal',
            text: 'Obeso',

        }).then((result) => {
            if (result.value) {
                window.location = 'Masa.html';
            }
        });
    }  else if (imc >= 40){
        Swal.fire({
            icon: 'error',
            title: 'Indice De Masa Corporal',
            text: 'Obesida Extrema o  De Alto Riesgo',

        }).then((result) => {
            if (result.value) {
                window.location = 'Masa.html';
            }
        });


    }else {
        Swal.fire({
            icon: 'question',
            title: 'Verifique los Datos...',

        }).then((result) => {
            if (result.value) {
                window.location = 'Masa.html';
            }
        });
    }

}
function sesion(){
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;
    
    if (Email == "sada1301as@gmail.com") {
        if(Password == "123"){
            Swal.fire({
            icon: 'success',
            title: 'Iniciando Sesion',
            text: 'Espere un Momento',

        }).then((result) => {
            if (result.value) {
                window.location = 'Login.html';
            }
        });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: 'Verifique sus Datos',
                
    
            }).then((result) => {
                if (result.value) {
                    window.location = 'Login.html';
                }
            });
        }

    }else{
        Swal.fire({
            icon: 'question',
            title: 'Campos Vacios...',
            text: 'Verifique los campos',

        }).then((result) => {
            if (result.value) {
                window.location = 'Login.html';
            }
        });
    }
}

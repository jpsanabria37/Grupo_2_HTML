function pintar(key) {
    switch (key) {
        case 0:
            document.getElementById("muestra").innerHTML = '';
            break;
        case 1:
            document.getElementById("muestra").innerHTML = '<iframe src="./views/Ejercicio_1.html"></frame>';
            break;
        case 2:
            document.getElementById("muestra").innerHTML = '<iframe src="./views/Ejercicio_2.html"></frame>';

            break;
        case 3:
            document.getElementById("muestra").innerHTML = '<img src="tresImagen.jpg"/>';

            break;
        case 4:
            document.getElementById("muestra").innerHTML = "<iframe src='eventos.html'></iframe>";

            break;
        //EJERCICIO 6
        case 6:
            document.getElementById("muestra").innerHTML = "<iframe src='./Ejercicio6.html'></iframe>;
            break;
        }
}
function pintar(key) {
    switch (key) {
        // MENU
        case 0:
            document.getElementById("muestra").innerHTML = '';
            break;
        //Ejercicio 1
        case 1:
            document.getElementById("muestra").innerHTML = '<iframe src="./views/Ejercicio_1.html"></frame>';
            break;
        //Ejercicio 2
        case 2:
            document.getElementById("muestra").innerHTML = '<iframe src="./views/Ejercicio_2.html"></frame>';

            break;
        //Ejercicio 3
        case 3:
            document.getElementById("muestra").innerHTML = '<img src="tresImagen.jpg"/>';

            break;
        //Ejercicio 4
        case 4:
            document.getElementById("muestra").innerHTML = "<iframe src='eventos.html'></iframe>";

            break;

        //Ejercicio 5
        case 5:
            document.getElementById("muestra").innerHTML = "<iframe src='eventos.html'></iframe>";
    
            break;

        //EJERCICIO 6
        case 6:
            document.getElementById("muestra").innerHTML = "<iframe src='./Ejercicio6.html'></iframe>;
            break;
    }
}
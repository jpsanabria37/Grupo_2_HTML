function pintar(key) {
    switch (key) {
        // MENU
        case 0:
            document.getElementById("muestra").innerHTML = '<iframe src="./views/menu.html"></iframe>';
            break;
        //Ejercicio 1
        case 1:
            document.getElementById("muestra").innerHTML = '<iframe src="./views/Ejercicio_1.html"></iframe>';
            break;
        //Ejercicio 2
        case 2:
            document.getElementById("muestra").innerHTML = '<iframe src="./views/Ejercicio_2.html"></iframe>';

            break;
        //Ejercicio 3
        case 3:
            document.getElementById("muestra").innerHTML = '<iframe src="./views/Ejercicio _3.html"></iframe>';

            break;
        //Ejercicio 4
        case 4:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/Ejercicio_4.html'></iframe>";

            break;

        //Ejercicio 5
        case 5:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/Ejercicio_5.html'></iframe>";
    
            break;

        //Ejercicio 6
        case 6:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/Ejercicio6.html'></iframe>";
            
            break;
        //Ejercicio output
        case 21:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/EjercicioOutput.html'></iframe>" ;

            break;
        //Ejercicio Select
        case 22:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/EjercicioSelect.html'></iframe>" ;

            break;
        //Ejercicio Textarea
        case 23:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/EjercicioTextarea.html'></iframe>" ;

        //Ejercicio Fieldset
        case 9:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/Fieldset.html'></iframe>";
            
            break;

        //Ejercicio Label
        case 10:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/Label.html'></iframe>";
            
            break;

        //Ejercicio Fieldset
        case 11:
            document.getElementById("muestra").innerHTML = "<iframe src='./views/Keygen.html'></iframe>";
            
            break;
    }
}
function pintar(key) {
    switch (key) {
        case 0:
            document.getElementById("muestra").innerHTML = '';
            break;
        case 1:
            document.getElementById("muestra").innerHTML = '<img src="unaImagen.jpg"/>';
            break;
        case 2:
            document.getElementById("muestra").innerHTML = '<img src="dosImagen.jpg"/>';

            break;
        case 3:
            document.getElementById("muestra").innerHTML = '<img src="tresImagen.jpg"/>';

            break;
        case 4:
            document.getElementById("muestra").innerHTML = "<iframe src='eventos.html'></iframe>";

            break;
    }
}
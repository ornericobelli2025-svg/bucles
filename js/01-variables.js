const nota = parseInt(prompt("Ingresa una nota del 0 al 10"));

if(isNaN(nota)) {
    document.writeln("nota no valida, vuelva a ingresar una nota.")
}else {
    if(nota < 0 || nota > 10) {
    document.writeln("Nota incorrecta")
} else {
    document.writeln("Nota correcta")
}
}
   switch (nota) {

        case 0:
        case 1:
        case 2:
            document.writeln("Muy deficiente");
            break;

        case 3:
        case 4:
            document.writeln("Insuficiente");
            break;

        case 5:
        case 6:
            document.writeln("Suficiente");
            break;

        case 7:
            document.writeln("Bien");
            break;

        case 8:
        case 9:
            document.writeln("Notable");
            break;

        case 10:
            document.writeln("Sobresaliente");
            break;

    }
    console.log("Hola mundo");
    
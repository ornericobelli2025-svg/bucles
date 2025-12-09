const nota = parseInt(prompt('ingrese una nota: 0-1-2-Muy deficiente 3-4-Insuficiente 5-6-Suficiente 7-bien 8-9-notable 10-Sobresaliente'))
if(isNaN (nota)){
    document.writeln("no es un numero")
    throw new Error()
}
switch (true) {
    case [0, 1, 2].includes(nota):    
        document.writeln("Muy deficiente")
        /*console.log("Muy deficiente")
        alert("Muy deficiente")
        */
        break;
        
    case nota == 3:
    case nota == 4:    
        document.writeln("Insuficiente")
        break;
    case nota == 5:
    case nota == 6:    
        document.writeln("Suficiente")
        break;
    case nota == 7:
        document.writeln("Bien")
        break;
    case nota == 8:
    case nota == 9:    
        document.writeln("Notable")
        break;
    case nota == 10:
        document.writeln("Sobresaliente")
        break;       
    default:
        document.writeln('Ingresaste una nota erronea.')
        break;
}
console.group('Cuadrado')
//perimetro de un cuadrado
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

//area de un cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;

//imprimir un objeto
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});
console.groupEnd('Cuadrado')

console.group('Triangulo')
//perimetro triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

//area triangulo
const areaTrianguo = (baseTriangulo * alturaTriangulo) / 2;

console.log({

ladoTriangulo1,
ladoTriangulo2,
baseTriangulo,
alturaTriangulo,
perimetroTriangulo,
areaTrianguo,
});
console.groupEnd('Triangulo')

function calcularCuadrado (lado) {
    return {
        preimetro: lado * 4,
        area: lado * lado,
    };
}

function calcularTriangulo(lado1, lado2, base, altura) {
   return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
   };
}

function calcularAlturaTriangulo (lado1, base) {
    if (lado1 == base){
        console.warn('Este no es un triangulo isosceles')
    } else {
    //formula altura de triangulo isosceles h = raizcudrada (lado1** 2 - (b** 2) / 4)
    return Math.sqrt(Math.pow(lado1, 2)-((Math.pow(base, 2)) / 4));   

    }
}

console.group('Circulo')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;


const circunferenciaCirculo = diametroCirculo * Math.PI;
const areaCirculo = Math.pow(radioCirculo, 2) * Math.PI;

console.log({
    radioCirculo,
    diametroCirculo,
    circunferenciaCirculo,
    areaCirculo,
});

function calcularCirculo(radio){
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2)

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
}

console.groupEnd('Circulo')

// DESCONTAR UN PORCENTAJE A UN NUMERO (Precio * (100 - descuento)) / 100   

const precio = 120;
const descuento = 15;

function aplicarDescuento (precio, descuento) {
    return (precio * (100 - descuento)) / 100;
}
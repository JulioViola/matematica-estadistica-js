const precio = document.querySelector('#precio')
const descuento = document.querySelector('#descuento')
const formDescuento = document.querySelector('#formDescuento')
const btnCalcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')
const codigoDescuento = document.querySelector('#codigoDescuento')

formDescuento.addEventListener('submit', hacerDescuento)

function hacerDescuento (event) {
    event.preventDefault();
    const precioValue = Number(precio.value);
    const descuentoValue = Number(descuento.value);
    const codigoDescuentoValue = codigoDescuento.value;
    const codigoDescuentoExistente = {
        codigo: 'julio2022',
        descuento: 20,
        }
     if (!precioValue) {
        resultado.innerText = "Por favor completa los campos";
    } else if (!precioValue & !descuentoValue){
        resultado.innerText = "Por favor completa los campos";  
    } else if (descuentoValue > 100){
        resultado.innerText = "El descuento debe ser menor a 100%";
    } else if (codigoDescuentoValue == codigoDescuentoExistente.codigo) {
        const calculoInput = (precioValue * (100 - codigoDescuentoExistente.descuento)) / 100;
        resultado.innerText = "$ " + calculoInput;

    } else { 
        const calculoInput = (precioValue * (100 - descuentoValue)) / 100;
        resultado.innerText = "$ " + calculoInput;
    }
    
    
    
}

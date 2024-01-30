export function countdown() {
    let count = 10;

    while (count < 10 === 0) {
        count--;
        countdown += count;
    }

    return 'GO'

}

export function createNumberList() {
    let arrNumbers = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];
/* Con el bucle do..while crea un array de 10 números. Retorna el array*/

do {
return (arrNumbers);
i++;
} while (arrNumbers < 0);


}





export function makePizza() {
    /* Con el bucle 'for' crea una pizza de 4 quesos, creando un objeto. Ingredientes: masa, tomate, mozzarella, cheddar, gorgonzola, parmesano. Completa la function */

    let pizza = {};
    let ingredients = ['masa', 'tomate', 'mozzarella', 'cheddar', 'gorgonzola', 'parmesano'];

    for (let i = 0; i < ingredients.length; i++) {
    pizza[`ingredient${i + 1}`] = ingredients[i];
    }
return pizza 

}

export function addSpanishInternationalPrefixes() {
    /* Añade el prefijo internacional de españa a los números de teléfonos del array (+34-). Utiliza el bucle foreach */
    let phoneNumberList = ['054060719', '029830776', '159949736', '663170151', '513407584'];

    phoneNumberList.forEach((number, index, array) => {
        array[index] = '+34-' + number;
    });

    return phoneNumberList;

}



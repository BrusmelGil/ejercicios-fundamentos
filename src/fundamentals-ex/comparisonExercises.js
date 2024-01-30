export function isJane() {
    /* La function debe devolver Jane, obligatorio el uso del comparador == */
    
    const name = 'Jane';
    return name == 'Jane' ? 'Jane' : name;

}

export function compareNumbers(number1,number2) {
    /* La function debe devolver 10, obligatorio el uso del comparador === */

    if (number1 === number2) {

        let number1 = '10';
        let number2 = '10';
    
        if (Number(number1) == Number(number2)) {
            
            return 10;
    
        } else {
    
            return 'No son iguales';
        }
    }
    

}


export function isGreaterThan10() {

    const quantity = 15;
    return quantity

}

export function isGreaterThan10AndEqualTo20() {

    const numb = 20;

    if (numb > 10 && numb === 20) {

        return 20;

    } else {

        return 'No cumple con las condiciones';
    }


}
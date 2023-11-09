
export function checkVariable(number) {
return typeof number
}

export function checkIfIsInteger(number) {
return Number.isInteger(number)
}

export function checkIfNumberIsInfinite(number) {
if (Number.isFinite(number)) {
    return "Number is finite";
} else {
    return "Number is Infinite";
}
}

export function sum(numb1,numb2) {
    return numb1 + numb2;

}

export function subtract(numb1) {
return numb1 - 25;

}



export function divide(numbOne) {
return numbOne / 2

}

export function checkIfNumbIsDivisibleByThree(numb1) {
if (numb1 % 3 === 0) {
    return 'Number is divisible by 3'
}

}
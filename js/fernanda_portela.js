/*
 * Example functions to practice JavaScript
 *
 * Fernanda Portela
 * 2026-04-07
 */

"use strict";

// 1: Encuentra el primer carácter de una cadena de texto que no se repite.
function firstNonRepeating(string) {
    const letters = [];
    for (let i=0; i<string.length; i++) {
        let found = false;
        for (let item of letters) {
            if (item.char === string[i]) {
                item.count++;
                found = true;
                break;
            }
        }
        if (!found) {
            letters.push({char: string[i], count: 1});
        }
    }
    for (let index in letters) {
        if (letters[index].count === 1) {
            return letters[index].char;
        }
    }
}

// 2: Implementa el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubbleSort(array) {
    for (let i=0; i<array.length-1; i++) {
        let flag = false;
        for (let j=0; j<array.length-1-i; j++) {
            if (array[j]>array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = true;
            }
        }
        if (flag === false) {
            break;
        }
    }
    return array;
}

// 3: Invierte un arreglo de números y regresa un nuevo arreglo con el resultado.
function invertArray(array) {
    let newArray = [];
    for (let i=array.length-1; i>=0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

// Modifica el mismo arreglo que se pasa como argumento. 
function invertArrayInplace(array) {
    let start = 0;
    let end = array.length-1;
    for (let i=start; i<=end; i++) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array;
}

// 4: Recibe una cadena de texto y regresa una nueva con la primera letra de cada palabra en mayúscula.
function capitalize(string) {
    let newString = "";
    for (let i=0; i<string.length; i++) {
        if (i === 0 || string[i-1] === " ") {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i];
        }
    }
    return newString;
}

// 5: Calcula el máximo común divisor de dos números.
function mcd(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1%num2;
        num1 = temp;
    }
    return num1;
}

// 6: Cambia una cadena de texto a 'Hacker Speak'. 
function hackerSpeak(string) {
    let newString = "";
    for (let i=0; i<string.length; i++) {
        if (string[i] === "a") {
            newString += 4;
        } else if (string[i] === "e") {
            newString += 3;
        } else if (string[i] === "i") {
            newString += 1;
        } else if (string[i] === "o") {
            newString += 0;
        } else if (string[i] === "s") {
            newString += 5;
        } else {
            newString += string[i];
        }
    }
    return newString;
}

// 7: Recibe un número, y regresa una lista con todos sus factores. 
function factorize(number) {
    let factors = [];
    for (let i=0; i<=number; i++) {
        if (number%i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// 8: Quita los elementos duplicados de un arreglo y regresa una lista con los elementos que quedan.
function deduplicate(array) {
    const numbers = [];
    for (let i=0; i<array.length; i++) {
        let found = false;
        for (let item of numbers) {
            if (item === array[i]) {
                found = true;
                break;
            }
        }
        if (!found) {
            numbers.push(array[i]);
        }
    }
    return numbers;
}

// 9: Recibe como parámetro una lista de cadenas de texto, y regresa la longitud de la cadena más corta.
function findShortestString(array) {
    if (array.length === 0) {
        return 0;
    }
    let min = array[0].length;
    for (let i=0; i<array.length; i++) {
        if (array[i].length < min) {
            min = array[i].length;
        }
    }
    return min;
}

// 10: Revisa si una cadena de texto es un palíndromo o no.
function isPalindrome(string) {
    let newString = "";
    for (let i=string.length-1; i>=0; i--) {
        newString += string[i];
    }
    return string === newString;
}

// 11: Toma una lista de cadena de textos y devuelve una nueva lista con todas las cadenas en orden alfabético.
function sortStrings(array) {
    for (let i=0; i<array.length-1; i++) {
        let flag = false;
        for (let j=0; j<array.length-1-i; j++) {
            if (array[j]>array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = true;
            }
        }
        if (flag === false) {
            break;
        }
    }
    return array;
}

// 12: Toma una lista de números y devuelve una lista con dos elementos: el promedio y la moda.
function stats(array) {
    let sum = 0;
    let average; 
    const numbers = [];
    for (let i=0; i<array.length; i++) {
        sum += array[i];
        let found = false;
        for (let item of numbers) {
            if (item.num === array[i]) {
                item.count++;
                found = true;
                break;
            }
        }
        if (!found) {
            numbers.push({num: array[i], count: 1});
        }
    }
    let max = 0;
    let mode;
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i].count > max) {
            max = numbers[i].count;
            mode = numbers[i].num;
        }
    }
    if (array.length === 0) {
        return [0, 0];
    } else {
        average = sum/array.length;
        return [average, mode];
    }
}

// 13: Toma una lista de cadenas de texto y devuelve la cadena más frecuente.
function popularString(array) {
    const words = [];
    for (let i=0; i<array.length; i++) {
        let found = false;
        for (let item of words) {
            if (item.str === array[i]) {
                item.count++;
                found = true;
                break;
            }
        }
        if (!found) {
            words.push({str: array[i], count: 1});
        }
    }
    let max = 0;
    let popular = "";
    for (let i=0; i<words.length; i++) {
        if (words[i].count > max) {
            max = words[i].count;
            popular = words[i].str;
        }
    }
    return popular;
}

// 14: Toma un número y devuelve verdadero si es una potencia de dos, falso de lo contrario.
function isPowerOf2(number) {
    let operation = Math.sqrt(number);
    return Number.isInteger(operation);
}

// 15: Toma una lista de números y devuelve una nueva lista con todos los números en orden descendente.
function sortDescending(array) {
    for (let i=0; i<array.length-1; i++) {
        let flag = false;
        for (let j=0; j<array.length-1-i; j++) {
            if (array[j]<array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = true;
            }
        }
        if (flag === false) {
            break;
        }
    }
    return array;
}

export {
    firstNonRepeating,
    bubbleSort,
    invertArray,
    invertArrayInplace,
    isPalindrome,
    sortDescending,
    isPowerOf2,
    popularString,
    stats,
    sortStrings,
    findShortestString,
    capitalize,
    mcd,
    deduplicate,
    factorize,
    hackerSpeak,
};
/*Zadanie 2
Napisz funkcje getNegativeNumbers(array), która jako argument przyjmuje tablicę. Tablica może zawierać liczby ujemne. Funkcja ma zwrócić nową tablicę wypełnioną tylko ujemnymi liczbami. Podpowiedź: Snippety -> 2. Jak dodawać elementy do tablicy ?

    Przykład:

var arr1 = [4, -5, 0, 2, -67, 8, 10, -34 ];
console.log(getNegativeNumbers(arr1));
Wynik w consoli: [-5, -67, -34]
*/


var arr1 = [4, -5, 0, 2, -67, 8, 10, -34 ];

function getNegativeNumbers(typeIn) {
    return typeIn.filter (function (negative) {
        return negative < 0;
    })
}

console.log(getNegativeNumbers(arr1));

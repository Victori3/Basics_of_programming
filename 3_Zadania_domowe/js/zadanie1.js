/*Zadanie 1
Napisz funkcje getSecondMaxNumber(array), która jako argument przyjmuje tablicę. Funkcja ma zwrócić drugą największą liczbę w tablicy.

    Przykład:

var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
*/

//
// var array = [2, 3, 69, 6, 90, 67, 5, 7, 8, 9 ];
//
// array.sort(function(a,b){
//     return b-a;
// });
//
// console.log(array[1]);


var tab = [ 93, 82, 46, 27, 100, 69 ];

function getSecondMaxNumber( array ) {
    return array.sort(function(a, b){
        return b-a;
    }) [1];
}

console.log( getSecondMaxNumber( tab ) );


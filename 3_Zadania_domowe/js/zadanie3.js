/*Zadanie 3
Napisz funkcję getEvenSum(n), która jako argument przyjmuje liczbę. Funkcja ma zwrócić sumę liczb parzystych od i = 1 do n. Funkcja ma zwracać wynik. Wynik możesz wypisać na konsoli.

    Przykład:

var n = 5;
console.log(getEvenSum(n));
Wynik w consoli:  6 // (bo 2 + 4 = 6)
*/

//
// var n = 5;
//
// function getEvenSum(n)
// {
//     var sum = 0;
//     for(var i = 1; i < n; i++)
//     {
//         if(i % 2 === 0)
//         {
//             sum = sum + i;
//         }
//     }
//     return sum;
// }
// console.log(getEvenSum(n));


var n = 5;

const getEvenSum = n => {
    let result = 0;
    for (let i = 0; i < n; i+=2) {
        result += i;
    }
    return result;
};

console.log(getEvenSum(n));






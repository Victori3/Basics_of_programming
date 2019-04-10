/*
Zadanie 4
Napisz funkcję getFibonacciNumbers(n), która przyjmuje jako argument liczbę n. Funkcja ma zwrócić tablicę wypełnioną ciągiem n liczb Fibonacciego.

    Ciąg Fibonacciego to ciąg liczb, gdzie każda liczba to suma dwóch poprzednich. Jeśli n będzie równe 0 zwróć 0, Jeśli n będzie równe 1 zwróć 1 W przeciwnym przypadku zobacz przykład niżej:

    Przykład:

        var n = 9;
console.log(getFibonacciNumbers(n));
Wynik w consoli: [0, 1, 1, 2, 3, 5, 8, 13, 21]
*/



var n = 9;
function getFibonacciNumbers(n){
    var newTab = [];
    for (var i = 0; i < n; i++) {
        if ( i === 0 ) {
            newTab.push(i)
        }else if ( i === 1 ) {
            newTab.push(i)
        }else {
            newTab.push(newTab[i - 1] + newTab[i - 2])
        }
    }
    return newTab
}
console.log(getFibonacciNumbers (n));
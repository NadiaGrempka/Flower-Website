/*
    Metody do wykorzystania:
    charAt()
    includes()
    replace()* podchwytliwe 🙂
    slice()
    split()
    toLowerCase()
    toUpperCase()
*/

const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo Pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase())
console.log(text2.toLowerCase())
console.log(text3.slice(6))
console.log(text4.includes('czy'))
console.log(text5.charAt(2))
console.log(text6.replace(/pies/gi, 'kot'))
console.log(text7.split(','))

const colors = ['pink', 'purple', 'red', 'orange', 'yellow', 'green', 'blue'];
console.log(colors);

function test(){
    console.log('colors');
}

test()

const person = {
    name: 'Klaudia',
    age: 23,
    favColor: 'red'
}

console.log(person);
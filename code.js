let button = document.getElementById('button');
let number = [0,1,2,3,4,5,6,7,8,9]
let passcode = document.querySelector('passcode')

button.addEventListener('click', generateNumber);
function generateNumber {
let sevenDigits = '';

for(let i = 0 < 7; i++) {
sevenDigits += number[Math.floor(Math.random() * number.length)]
passcode.innerHTML = sevenDigits.split('').join('')
}
console.log(sevenDigits)
}

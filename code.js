let button = document.getElementById('button');
let number = [0,1,2,3,4,5,6,7,8,9]
let passcode = document.querySelector('.passcode')
let history_board = document.querySelector('.passcode_history')

button.addEventListener('click', generateNumber);
function generateNumber() {
  let sevenDigits = '';

  for(let i = 0; i < 7; i++) {
    sevenDigits += number[Math.floor(Math.random() * number.length)]
    passcode.innerHTML = sevenDigits.split('').join('')
  }
  getRecord(sevenDigits)
}

remove_button.addEventListener('click', removeRecord);

function getRecord(sevenDigits) {
 let element = document.createElement('div');
   element.classList.add('passcode_record')
   element.innerHTML = `<p class = 'record'> ${sevenDigits} </p>
                        <button class= 'remove_button' type= "button" name= "button">delete</button>`

   history_board.appendChild(element)
   let remove_button = element.querySelector('.remove_button');
   remove_button.addEventListener('click', removeRecord);

}

function removeRecord(e) {
let record = e.currentTarget.parentElement
history_board.removeChild(record)


}

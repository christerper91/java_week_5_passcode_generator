let button = document.getElementById('button');
let number = [0,1,2,3,4,5,6,7,8,9]
let passcode = document.querySelector('.passcode')
let history_board = document.querySelector('.passcode_history')
let clearAll_button = document.getElementById('clearAll_button')
let delete_record = []
let restore_button = document.getElementById('restore_button')

button.addEventListener('click', generateNumber);
clearAll_button.addEventListener('click', clearAllRecord);
restore_button.addEventListener('click', restoreRecord);

function generateNumber() {
  let sevenDigits = '';
  for(let i = 0; i < 7; i++) {
    sevenDigits += number[Math.floor(Math.random() * number.length)]
    passcode.innerHTML = sevenDigits.split('').join('')
  }
  getRecord(sevenDigits)
}

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
history_board.removeChild(record);
storeDeletedRecord(record)
}

function clearAllRecord() {
 let records = document.querySelectorAll('.passcode_record');
 records.forEach(function(record) {
   history_board.removeChild(record)
 });
 storeDeletedRecord(record)
}

function storeDeletedRecord(record) {
 delete_record.push(record)
}

function restoreRecord() {
  delete_record.forEach(function(record) {
    history_board.appendChild(record)
  });

}

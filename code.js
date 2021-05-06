let button = document.getElementById('button');
let number = [0,1,2,3,4,5,6,7,8,9]
let passcode = document.querySelector('.passcode')
let history_board = document.querySelector('.passcode_history')
let clearAll_button = document.getElementById('clearAll_button')
let delete_record = []
let restore_button = document.getElementById('restore_button')
let timer_display = document.querySelector('.timer_display')
let timer = 10



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
 storeDeletedRecord(record)
});

}

function storeDeletedRecord(record) {
 delete_record.push(record)
 startTimer()
 // timer = 10
}

function restoreRecord() {
  delete_record.forEach(function(record) {
    history_board.appendChild(record)
  });
  restore_button.style.display = 'none';
  clearAll_button.style.display = 'inline';
  delete_record = [];
  timer = 0;
}

function startTimer() {
  restore_button.style.display = 'inline'
  timer_display.style.display = 'inline'

 let runTimer = setInterval(function(){
   if (timer > 0){
     timer -=1
     timer_display.innerHTML = `${timer} seconds to go restore data`
   }
   else{
     clearInterval(runTimer)
     restore_button.style.display = 'none'
     timer_display.style.display = 'none'
     timer = 10
     delete_record = []
   };
 }, 1000);
 console.log(startTimer);
}



const inpRange = document.getElementById('inpRange');
const lblShowPass = document.getElementById('lblShowSize');
const inpButton = document.getElementById('bot');
const inpShowPass = document.getElementById('inpShowPass');

const chkAll = document.getElementById('chkCont');



const numeroAleatorio = (max, min) => Math.floor((Math.random() * (max + 1 - min)) + min);

const passwordOptions = {
    lowercase: 'abcdefghijklmnñopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    numbers: '1234567890',
    symbols: '+-.,!"·$%&/()=?{}',
  };

inpRange.addEventListener('input', event => {
    valueNow = event.target.value
    lblShowPass.textContent = `LENGTH: ${valueNow}`



});

let checkedButtons;
const enableButtonSub = (event) => {
    checkedButtons = document.querySelectorAll('.selectChk__checkbox:checked')
    if(checkedButtons.length ===0){
        inpButton.disabled = true
        return
    }
    inpButton.disabled = false
    
    
}

chkAll.addEventListener('change', enableButtonSub)



inpButton.addEventListener('click', event => {
    let listCharacters = '';
    let passOptConcat = '';

    checkedButtons.forEach(item => passOptConcat+= passwordOptions[item.dataset.string]);

    for(let i = 0; i < inpRange.value; i++){
        listCharacters += passOptConcat.charAt(numeroAleatorio(passOptConcat.length-1, 0));
    }
    inpShowPass.value = listCharacters;


});
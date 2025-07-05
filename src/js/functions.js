import { inpButton, inpShowPass, lblShowPass } from "./dom";
import { PASSWORD_OPTIONS } from "./passwordOptions";

const numeroAleatorio = (max, min) => Math.floor((Math.random() * (max + 1 - min)) + min);

let checkedButtons;
const enableButtonSub = (event, ) => {
    checkedButtons = document.querySelectorAll('.selectChk__checkbox:checked');
    if(checkedButtons.length ===0){
        inpButton.disabled = true
        return
    }
    inpButton.disabled = false
}

const concatPassword = ()=> {
    let listCharacters = '';
    let passOptConcat = '';

    checkedButtons.forEach(item => passOptConcat+= PASSWORD_OPTIONS[item.dataset.string]);

    for(let i = 0; i < inpRange.value; i++){
        listCharacters += passOptConcat.charAt(numeroAleatorio(passOptConcat.length-1, 0));
    }
    inpShowPass.value = listCharacters;
}

const changeLabelLength = (event)=>{
    const valueNow = event.target.value;
    lblShowPass.textContent = `LENGTH: ${valueNow}`;
}

export {enableButtonSub, concatPassword, changeLabelLength}
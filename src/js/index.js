import { chkAll, inpButton, inpRange } from "./dom";
import { changeLabelLength, concatPassword, enableButtonSub } from "./functions";



inpRange.addEventListener('input', changeLabelLength);



chkAll.addEventListener('change', enableButtonSub)



inpButton.addEventListener('click', concatPassword);
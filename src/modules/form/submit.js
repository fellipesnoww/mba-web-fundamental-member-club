import { searchCardByID } from '../../services/card-seach-by-id.js'
import { load } from '../page/load.js';


const form = document.getElementById("search");
const input = document.querySelector("input")

function validateCardID(cardId){
    const regexValidation = /^\d+$/;

    if(!regexValidation.test(cardId)) {
        return alert("Informe um valor de cartão valido")
    }

    return true;
}

form.onsubmit = async (event) => {
    event.preventDefault();
    try {
        const cardId = input.value;
        if(validateCardID(cardId)){
            const cardInformation = await searchCardByID({id: cardId});
            
            if(!cardInformation) return;

            load(cardInformation);
        }
    } catch (error) {
        console.error("Erro no processo de busca", error);
        alert(error);
    }
}
import { apiConfig } from './api-config';
import { ApiError } from '../classes/ApiError.js';

export async function searchCardByID({ id }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/clients/?id=${id}`, {
            method: 'GET'
        });

        const cards = await response.json();
        
        if(cards.length > 0) {
            const card = cards[0];
            return card;
        }

        throw new ApiError("Cartão não encontrado!");

    } catch (error) {
        console.error('Erro ao procurar cartão:', error);
        if(error instanceof ApiError) {
            alert(error.message);
        } else {
            alert('Houveram erros ao procurar o cartão');
        }

        return null;
    }
}
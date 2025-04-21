import { apiConfig } from './api-config';

export async function searchCardByID({ id }) {
    try {
        const card = await fetch(`${apiConfig.baseURL}/clients/?id=${id}`, {
            method: 'GET'
        });

        return card.json();

    } catch (error) {
        console.error('Erro ao procurar cartão:', error);
        alert('Cartão não encontrado!');
    }
}
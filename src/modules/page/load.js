

function renderClientInformation(card) {
    const {name, clientSince} = card;

    const nameElement = document.getElementById("user-name");
    nameElement.textContent = name;

    const sinceSpan = document.getElementById("client-since");
    sinceSpan.textContent = `Cliente desde ${clientSince}`;

    // const clientPhoto = document.getElementById("client-photo");
    // clientPhoto.setAttribute("src");
    // clientPhoto.setAttribute("alt", `Foto de ${name}`);
}

export function load(card) {
    renderClientInformation(card);
}


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

function renderClientAppointmentHistory(appointmentHistory) {
    const appointmentHistorySection = document.getElementById("cuts-history");

    const appointmentCount = document.getElementById("history-count");
    appointmentCount.textContent = `${appointmentHistory.length} cortes`;

    const historyItemRemove = document.querySelectorAll("div.history-item");
    historyItemRemove.forEach(historyItem => {
        if (historyItem.parentNode) {
            historyItem.parentNode.removeChild(historyItem);
          }
    })

    appointmentHistory.forEach(appointment => {
        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");

        const itemData = document.createElement("div");
        itemData.classList.add("item-data");

        const date = document.createElement("strong");
        date.textContent = appointment.date;

        const time = document.createElement("span");
        time.textContent = appointment.time;

        const checkIcon = document.createElement("div");
        checkIcon.classList.add("checked-icon");
        checkIcon.classList.add("gap-12");

        const checkSvg = document.createElement("img");
        checkSvg.setAttribute("src", './src/assets/icons/check-green.svg');

        checkIcon.append(checkSvg);

        itemData.append(date, time);
        historyItem.append(itemData, checkIcon);

        appointmentHistorySection.appendChild(historyItem);

    });
}

function calculateProgressPercentage(currentValue, totalValue) {

    if (totalValue === 0) {
        return "0%";
    }
    
    const percentage = (currentValue / totalValue) * 100;
    return percentage.toFixed(2) + "%"

}

function renderLoyaltyCard(loyaltyCard) {
    const remaningCount = document.getElementsByClassName("remaning-count")[0];
    remaningCount.innerHTML = `<strong>${loyaltyCard.totalCuts}</strong> cortes restantes`;

    const progressText = document.getElementsByClassName("progress-text")[0];
    progressText.textContent = `${loyaltyCard.totalCuts} de ${loyaltyCard.cutsNeeded}`;

    const progressBarGradient = document.getElementsByClassName("progress-fill")[0];
    progressBarGradient.style.width = calculateProgressPercentage(loyaltyCard.totalCuts, loyaltyCard.cutsNeeded);

    if(loyaltyCard.totalCuts === loyaltyCard.cutsNeeded) {
        alert("Parabéns! Seu próximo corte é gratuito!")
    }
}

export function load(card) {
    renderClientInformation(card);
    renderClientAppointmentHistory(card.appointmentHistory);
    renderLoyaltyCard(card.loyaltyCard);
}
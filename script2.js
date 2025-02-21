function editTimelineEvent(button) {
    let eventContent = button.parentNode;
    let title = prompt("Novo título:", eventContent.querySelector('h2').innerText);
    let text = prompt("Novo texto:", eventContent.querySelector('p').innerText);
    if (title && text) {
        eventContent.querySelector('h2').innerText = title;
        eventContent.querySelector('p').innerText = text;
        // Atualize no backend
        // fetch('/update-content', {method: 'POST', body: JSON.stringify({title, text})});
    }
}

function deleteTimelineEvent(button) {
    let eventContent = button.parentNode;
    eventContent.remove();
    // Envie solicitação para o backend
    // fetch('/delete-content', {method: 'DELETE'});
}

function addTimelineEvent() {
    let title = prompt("Título:");
    let text = prompt("Texto:");
    let fileInput = document.getElementById('imageInput');
    let file = fileInput.files[0];
    if (title && text && file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            let newEvent = document.createElement('div');
            newEvent.classList.add('timeline-event');
            newEvent.innerHTML = `
                <div class="timeline-content">
                    <h2>${title}</h2>
                    <p>${text}</p>
                    <img src="${e.target.result}" alt="${title}">
                    <button onclick="editTimelineEvent(this)">Editar</button>
                    <button onclick="deleteTimelineEvent(this)">Excluir</button>
                </div>
            `;
            document.getElementById('timeline').appendChild(newEvent);
            // Atualize no backend
            // fetch('/add-content', {method: 'POST', body: JSON.stringify({title, text, image: e.target.result})});
        };
        reader.readAsDataURL(file);
    }
}

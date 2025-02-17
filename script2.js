function addTimelineEvent() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Por favor, selecione uma imagem da galeria.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const timeline = document.getElementById('timeline');
        const newEvent = document.createElement('div');
        newEvent.classList.add('timeline-event');

        const newContent = document.createElement('div');
        newContent.classList.add('timeline-content');

        const newTitle = document.createElement('h2');
        newTitle.textContent = prompt('Digite o título do evento:');
        newContent.appendChild(newTitle);

        const newText = document.createElement('p');
        newText.textContent = prompt('Digite a descrição do evento:');
        newContent.appendChild(newText);

        const newImage = document.createElement('img');
        newImage.src = e.target.result;
        newImage.alt = newTitle.textContent;
        newContent.appendChild(newImage);

        newEvent.appendChild(newContent);
        timeline.appendChild(newEvent);
    }
    
    reader.readAsDataURL(file);
}

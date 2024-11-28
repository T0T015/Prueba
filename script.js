const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const envelope = document.getElementById('envelope');
const flap = document.querySelector('.flap');
const invitation = document.getElementById('invitation');
const backgroundMusic = document.getElementById('backgroundMusic');



openButton.addEventListener('click', () => {
    // Animar el sobre para abrirlo
    flap.style.transform = 'rotateX(-180deg)';

    // Quitar el botón de abrir y mostrar la invitación
    openButton.classList.add('hidden');
    setTimeout(() => {
        envelope.style.display = 'none';
        invitation.classList.remove('hidden');
        invitation.classList.add('show-invitation');
    }, 1000);

    // Reproducir música
    backgroundMusic.play();
});


closeButton.addEventListener('click', () => {
    // Cerrar la invitación y restaurar el sobre
    invitation.classList.remove('show-invitation');
    invitation.classList.add('hidden');
    envelope.style.display = 'flex';
    flap.style.transform = 'rotateX(0)';
    openButton.classList.remove('hidden');

    // Pausar la música
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reiniciar la música
});

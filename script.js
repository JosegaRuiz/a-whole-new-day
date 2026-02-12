const app = document.getElementById('app');

function checkTime() {
    const now = new Date();
    const targetDate = new Date('2026-02-13T09:00:00');
    
    if (now < targetDate) {
        showHome();
    } else {
        // Aquí irán las siguientes fases del día
        showHome();
    }
}

function showHome() {
    app.innerHTML = `
        <div class="home">
            <h1>Estás a punto de adentrarte en un viaje especial de un día</h1>
        </div>
    `;
}

checkTime();

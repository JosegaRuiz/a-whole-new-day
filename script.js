const app = document.getElementById('app');
const targetDate = new Date('2026-02-13T09:00:00');

function checkTime() {
    const now = new Date();
    
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
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para que comience la aventura</div>
        </div>
    `;
    updateCountdown();
}

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff <= 0) {
        checkTime();
        return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    setTimeout(updateCountdown, 1000);
}

checkTime();

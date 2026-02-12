const app = document.getElementById('app');

const phases = [
    { time: '2026-02-13T09:00:00', name: 'departure' },
    { time: '2026-02-13T10:00:00', name: 'beach-walk' },
    { time: '2026-02-13T13:00:00', name: 'next' } // Siguiente fase
];

function checkTime() {
    const now = new Date();
    const startDate = new Date('2026-02-13T09:00:00');
    
    if (now < startDate) {
        showHome();
    } else if (now >= new Date(phases[0].time) && now < new Date(phases[1].time)) {
        showDeparture();
    } else if (now >= new Date(phases[1].time) && now < new Date(phases[2].time)) {
        showBeachWalk();
    } else {
        // Aquí irán las siguientes fases
        showBeachWalk();
    }
}

function showHome() {
    app.innerHTML = `
        <div class="home">
            <h1>Estás a punto de adentrarte en un viaje mágico de un día</h1>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para que comience la aventura</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T09:00:00'));
}

function showDeparture() {
    app.innerHTML = `
        <div class="phase">
            <h1>¡Es momento de ponerse en marcha, coger todo lo necesario y salir rumbo a nuestro desconocido destino!</h1>
            <p class="subtitle">No está muy claro allá donde vamos, pero por suerte hemos encontrado uno de los mejores copilotos posible que te ayudará en este corto trayecto</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para la siguiente sorpresa</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T10:00:00'));
}

function showBeachWalk() {
    app.innerHTML = `
        <div class="phase">
            <h1>Como mi propia Ariel de cabello rojo fuego explorando nuevos horizontes, es momento de caminar junto al mar.</h1>
            <p class="subtitle">Un paseo relajado pero con paso firme: tenemos 3 horas para recorrer esta ruta costera y desconectar rodeados de la naturaleza. Y aunque tu voz ya encanta mi mundo cada día, hoy el océano será nuestro escenario. ¡Que comience la aventura, mi princesa sirena!</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para continuar el día</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T13:00:00'));
}

function updateCountdown(targetDate) {
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
    
    setTimeout(() => updateCountdown(targetDate), 1000);
}

checkTime();

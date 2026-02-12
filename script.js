const app = document.getElementById('app');

const phases = [
    { time: '2026-02-13T09:00:00', name: 'departure' },
    { time: '2026-02-13T10:00:00', name: 'beach-walk' },
    { time: '2026-02-13T13:00:00', name: 'drive-to-lunch' },
    { time: '2026-02-13T13:30:00', name: 'lunch' },
    { time: '2026-02-13T15:30:00', name: 'next' } // Siguiente fase
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
    } else if (now >= new Date(phases[2].time) && now < new Date(phases[3].time)) {
        showDriveToLunch();
    } else if (now >= new Date(phases[3].time) && now < new Date(phases[4].time)) {
        showLunch();
    } else {
        // Aquí irán las siguientes fases
        showLunch();
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

function showDriveToLunch() {
    app.innerHTML = `
        <div class="phase">
            <h1>¡Hora de volver al coche y poner rumbo a nuestro próximo destino!</h1>
            <p class="subtitle">Después de ese paseo mágico junto al mar, es momento de reponer energías. Esta vez, tu copiloto de confianza te guiará hasta el lugar perfecto para disfrutar de una comida especial.</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para llegar a nuestro destino</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T13:30:00'));
}

function showLunch() {
    app.innerHTML = `
        <div class="phase">
            <h1>¡Bienvenida a Voltereta!</h1>
            <p class="subtitle">Como Blancanieves cantando rodeada de sus amigos alados, aquí podrás disfrutar de una comida deliciosa mientras ejerces de ornitóloga observando las aves en su hábitat natural. Después de nuestra aventura junto al mar, es momento de reponer fuerzas en el lugar perfecto donde gastronomía y naturaleza se encuentran. ¡Que aproveche, mi princesa!</p>
            <img src="reserva_voltereta.jpg" alt="Reserva Voltereta" class="ticket">
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para la siguiente aventura</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T15:30:00'));
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

const app = document.getElementById('app');

const phases = [
    { time: '2026-02-13T09:00:00', name: 'departure' },
    { time: '2026-02-13T10:00:00', name: 'beach-walk' },
    { time: '2026-02-13T13:00:00', name: 'drive-to-lunch' },
    { time: '2026-02-13T13:30:00', name: 'lunch' },
    { time: '2026-02-13T15:30:00', name: 'gift' },
    { time: '2026-02-13T16:30:00', name: 'drive-together' },
    { time: '2026-02-13T17:00:00', name: 'lorcana' },
    { time: '2026-02-13T20:30:00', name: 'drive-to-dinner' },
    { time: '2026-02-13T20:45:00', name: 'dinner' },
    { time: '2026-02-13T21:45:00', name: 'walk-to-plaza' },
    { time: '2026-02-13T22:00:00', name: 'next' } // Siguiente fase
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
    } else if (now >= new Date(phases[4].time) && now < new Date(phases[5].time)) {
        showGift();
    } else if (now >= new Date(phases[5].time) && now < new Date(phases[6].time)) {
        showDriveTogether();
    } else if (now >= new Date(phases[6].time) && now < new Date(phases[7].time)) {
        showLorcana();
    } else if (now >= new Date(phases[7].time) && now < new Date(phases[8].time)) {
        showDriveToDinner();
    } else if (now >= new Date(phases[8].time) && now < new Date(phases[9].time)) {
        showDinner();
    } else if (now >= new Date(phases[9].time) && now < new Date(phases[10].time)) {
        showWalkToPlaza();
    } else {
        // Última fase del día
        showCarnival();
    }
}

function showHome() {
    app.innerHTML = `
        <div class="home">
            <h1>Como Geppetto deseando que su sueño cobrara vida, hoy ese deseo se hace realidad. Te voy a enseñar un mundo ideal: un día lleno de magia, sorpresas y aventuras que he preparado con ilusión para ti. Cada momento, cada parada, cada detalle... todo forma parte de esta historia que estamos a punto de vivir juntos. ¿Preparada para que la magia cobre vida?</h1>
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
            <img src="Reserva_voltereta.jpg" alt="Reserva Voltereta" class="ticket">
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para la siguiente aventura</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T15:30:00'));
}

function showGift() {
    app.innerHTML = `
        <div class="phase">
            <h1>Como Cenicienta necesitaba el zapato perfecto para su baile, después de tanta aventura tus pies merecen un poco de mimo.</h1>
            <p class="subtitle">He notado que tus compañeros de camino favoritos están pidiendo refuerzos, así que es hora de volver al coche donde te espera una sorpresa especial. ¡Porque toda princesa merece cuidar de cada paso que da!</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para continuar la aventura</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T16:30:00'));
}

function showDriveTogether() {
    app.innerHTML = `
        <div class="phase">
            <h1>Es momento de volver al coche, sin rumbo aparente pero con el mejor copiloto a tu lado.</h1>
            <p class="subtitle">Ya te vas fiando de mis indicaciones, y espero que poco a poco me elijas para acompañarte en muchas más aventuras. Porque como Carl y Ellie nos enseñaron, la mayor aventura es compartir toda una vida juntos.</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para el próximo destino</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T17:00:00'));
}

function showLorcana() {
    app.innerHTML = `
        <div class="phase">
            <h1>¡Llegamos a Manavortex!</h1>
            <p class="subtitle">Es momento de jugar Lorcana en el evento de presentación de Winterspell. Seremos Iluminadores juntos: invocando personajes Disney, conociendo a otros aventureros y dejando que el azar de las cartas nos sorprenda en cada partida. Porque como toda buena historia Disney, lo mejor es compartir la magia con quien amas. ¡Que la suerte esté de nuestro lado!</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para finalizar el evento</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T20:30:00'));
}

function showDriveToDinner() {
    app.innerHTML = `
        <div class="phase">
            <h1>El día va llegando a su fin, pero aún quedan sorpresas por descubrir.</h1>
            <p class="subtitle">Es hora de subir al coche y dirigirnos hacia la siguiente parada de este día mágico. Tu copiloto te guiará una vez más.</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para llegar</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T20:45:00'));
}

function showDinner() {
    app.innerHTML = `
        <div class="phase">
            <h1>Como Remy guiando a Linguini en la cocina, hemos llegado a uno de los kebabs más famosos de Alicante.</h1>
            <p class="subtitle">Porque si algo nos une además de la magia Disney, es nuestro amor por la buena comida. Y el kebab... ¡ese es nuestro reino compartido! Aunque ya sabemos quién lleva las riendas en nuestra dupla culinaria. Es hora de disfrutar de este lugar especial que promete ser diferente. ¡Buen provecho!</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para continuar</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T21:45:00'));
}

function showWalkToPlaza() {
    app.innerHTML = `
        <div class="phase">
            <h1>Con las últimas energías que nos queden, es momento de caminar hacia la Plaza del Carmen.</h1>
            <p class="subtitle">Allí nos espera la última de las aventuras de este día mágico. Un último paseo juntos para cerrar con broche de oro.</p>
            <div class="countdown" id="countdown"></div>
            <div class="countdown-label">para llegar a la plaza</div>
        </div>
    `;
    updateCountdown(new Date('2026-02-13T22:00:00'));
}

function showCarnival() {
    app.innerHTML = `
        <div class="phase">
            <h1>¡Llegamos al Pregón de Carnavales!</h1>
            <p class="subtitle">Como Peter Pan nos enseñó a nunca crecer del todo, cuando nos hacemos sorpresas nos disfrazamos de niños igual que en un carnaval. Esa magia de mantener viva la ilusión es lo que nos hace vivir tanto la vida. Y hoy, cerramos este día mágico celebrando juntos.</p>
            <div class="countdown">Gracias por acompañarme en todas mis locuras y hacer de cada día una aventura. Porque al final, la mejor locura es vivir intensamente juntos.</div>
        </div>
    `;
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

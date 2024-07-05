// Fecha objetivo para la cuenta regresiva (formato: Año, Mes (0-11), Día, Hora, Minuto, Segundo)
const targetDate = new Date('2025-07-02T00:00:00');
        
// Intervalo de refresco en milisegundos (1000 ms = 1 segundo, 60000 ms = 1 minuto)
const refrescarCada = 1000; // Cambiar a 60000 para refrescar cada minuto

function actualizarCuentaRegresiva() {
    const now = new Date();
    const tiempoRestante = targetDate - now;

    if (tiempoRestante <= 0) {
        // document.getElementById('months').textContent = '0 Meses';
        // document.getElementById('days').textContent = '0 Días';
        document.getElementById('contador').textContent = '¡Feliz Cumpleaños!';
        return;
    }

    const months = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    // document.getElementById('months').textContent = `${months} Meses`;
    // document.getElementById('days').textContent = `${days} Días`;
    document.getElementById('contador').textContent = `${months} Meses` + `${days} Días`;
}

setInterval(actualizarCuentaRegresiva, refrescarCada);
actualizarCuentaRegresiva(); // Ejecutar inmediatamente la primera vez
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
    id: 236203659, // Vimeo video ID
    width: 640
});

// Funkcja do zapisywania czasu odtwarzania w localStorage
const saveTimeToLocalStorage = throttle(async function() {
    const currentTime = await player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000); // Throttle na raz na sekundę (1000ms)

// Obsługa zdarzenia timeupdate - aktualizacja czasu odtwarzania w localStorage
player.on('timeupdate', saveTimeToLocalStorage);

// Funkcja do odtwarzania od zapisanego momentu po przeładowaniu strony
async function resumePlaybackFromLocalStorage() {
    const storedTime = localStorage.getItem('videoplayer-current-time');
    if (storedTime !== null) {
        await player.setCurrentTime(parseFloat(storedTime));
    }
}

// Wywołanie funkcji przy przeładowaniu strony
window.addEventListener('load', resumePlaybackFromLocalStorage);
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Função para formatar tempo (sempre 2 dígitos)
function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

// Atualiza o display
function updateDisplay() {
  display.innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Iniciar
startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
});

// Pausar
pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
});

// Resetar
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});

// Exibe 00:00:00 ao carregar
updateDisplay();
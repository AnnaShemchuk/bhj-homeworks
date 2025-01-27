const countDown = function() {
    const timer = document.getElementById('timer');
    timer.textContent--;

    if (timer.textContent < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(intervalId);
    }
}

document.getElementById('timer').textContent = 30;

const intervalId = setInterval(countDown, 1000);
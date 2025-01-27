document.addEventListener('DOMContentLoaded', function () {
    let score = 0;
    let misses = 0;
    const dead = document.querySelector('#dead');
    const lost = document.querySelector('#lost');
    const holes = document.querySelectorAll('.hole');

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    function whackMole(e) {
        if (e.target.classList.contains('hole_has-mole')) {
            dead.textContent = score += 1;
        } else {
            lost.textContent = misses += 1;
        }

        if (score === 10) {
            endGame('Победа! Вы победили кротов!');
        } else if (misses === 5) {
            endGame('Игра окончена! Вы проиграли.');
        }
    }

    function endGame(message) {
        alert(message);
        score = 0;
        misses = 0;
        dead.textContent = score;
        lost.textContent = misses;
    }

    holes.forEach((hole, index) => {
        hole.addEventListener('click', whackMole);
    });
});
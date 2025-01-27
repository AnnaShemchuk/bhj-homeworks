const score = document.querySelector('#clicker__counter');
const button = document.querySelector('.clicker__cookie')
let count = 0;

button.addEventListener('mousedown', function () {
    button.style.width = "300px";  
})

button.addEventListener('mouseup', function () {
    button.style.width = "200px";   
})

button.addEventListener('click', function () {
    count += 1;
    score.textContent = count;
})
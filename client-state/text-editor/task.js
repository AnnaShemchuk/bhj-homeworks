const editor = document.getElementById('editor');

window.addEventListener('load', () => {
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText;
    }
});

editor.addEventListener('input', () => {
    localStorage.setItem('editorText', editor.value);
});

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'Delete') {
        localStorage.removeItem('editorText');
        editor.value = '';
        alert('Локальное хранилище очищено!');
    }
});
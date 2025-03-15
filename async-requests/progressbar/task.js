document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const progress = document.getElementById('progress');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const file = fileInput.files[0];
        if (!file) {
            alert('Пожалуйста, выберите файл для загрузки.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', function (event) {
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total;
                progress.value = percentComplete;
            }
        });

        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                alert('Файл успешно загружен!');
            } else {
                alert('Ошибка при загрузке файла.');
            }
            progress.value = 0;
        });

        xhr.addEventListener('error', function () {
            alert('Ошибка при загрузке файла.');
            progress.value = 0;
        });

        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
        xhr.send(formData);
    });
});
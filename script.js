document.addEventListener('DOMContentLoaded', function() {
    console.log('生日快乐网页已加载');

    const photoUpload = document.getElementById('photoUpload');
    const uploadedPhotos = document.getElementById('uploadedPhotos');

    photoUpload.addEventListener('change', function(event) {
        const files = event.target.files;
        uploadedPhotos.innerHTML = ''; // 清空之前的照片

        Array.from(files).forEach(file => {
            const formData = new FormData();
            formData.append('photo', file);

            fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = data.filePath;
                img.style.width = '100%';
                img.style.margin = '10px 0';
                uploadedPhotos.appendChild(img);
            })
            .catch(error => console.error('Error uploading file:', error));
        });
    });
}); 
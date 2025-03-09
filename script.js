// 你可以在这里添加一些交互功能
document.addEventListener('DOMContentLoaded', function() {
    console.log('生日快乐网页已加载');

    const photoUpload = document.getElementById('photoUpload');
    const uploadedPhotos = document.getElementById('uploadedPhotos');

    photoUpload.addEventListener('change', function(event) {
        const files = event.target.files;
        uploadedPhotos.innerHTML = ''; // 清空之前的照片

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100%';
                img.style.margin = '10px 0';
                uploadedPhotos.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    });
}); 
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('backgroundUpload');
    const file = fileInput.files[0];

    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
        const reader = new FileReader();
        reader.onload = function() {
            localStorage.setItem('background', reader.result);
            window.location.href = 'home.html';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please upload a valid image or video file.');
    }
});

window.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('home.html')) {
        const background = localStorage.getItem('background');
        if (background) {
            document.body.style.backgroundImage = `url(${background})`;
        }
    }
});

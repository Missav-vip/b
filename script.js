document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('bgUpload');
    const file = fileInput.files[0];
    const url = URL.createObjectURL(file);
    const background = document.createElement('div');
    
    background.style.backgroundImage = `url(${url})`;
    background.style.backgroundSize = 'cover';
    background.style.backgroundPosition = 'center';
    background.style.position = 'fixed';
    background.style.width = '100%';
    background.style.height = '100%';
    background.style.zIndex = '-1';
    background.style.overflow = 'hidden'; // Menghindari scroll

    document.body.appendChild(background);
    
    // Redirect to home.html after upload
    window.location.href = "home.html";
});

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchQuery').value;
    alert(`Mencari: ${query}`);
});

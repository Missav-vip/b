document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    // Memeriksa apakah file ada dan merupakan gambar
    if (file) {
        const reader = new FileReader();
        
        // Menangani saat gambar sudah dibaca
        reader.onload = function(e) {
            const background = document.getElementById('background');
            background.style.backgroundImage = `url(${e.target.result})`;
            background.style.backgroundSize = 'cover'; // Agar gambar menutupi seluruh latar belakang
            background.style.backgroundPosition = 'center'; // Memposisikan gambar di tengah
            background.style.position = 'fixed'; // Agar tetap di tempat
            background.style.top = '0';
            background.style.left = '0';
            background.style.width = '100%';
            background.style.height = '100%';
        }

        reader.readAsDataURL(file); // Membaca file sebagai URL data
    }
});

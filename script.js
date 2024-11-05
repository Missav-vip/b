// script.js
const uploadForm = document.getElementById('uploadForm');
const backgroundUpload = document.getElementById('backgroundUpload');
const backgroundPreview = document.getElementById('backgroundPreview');

uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const file = backgroundUpload.files[0];

    if (!file) {
        alert('Pilih file untuk diunggah');
        return;
    }

    // Validasi file type dan ukuran
    const fileType = file.type;
    const fileSize = file.size;
    const maxFileSize = 50 * 1024 * 1024; // 50MB

    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const validVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];

    if (![...validImageTypes, ...validVideoTypes].includes(fileType)) {
        alert('Hanya file gambar (JPG, PNG, GIF) dan video (MP4, WebM, OGG) yang diperbolehkan');
        return;
    }

    if (fileSize > maxFileSize) {
        alert('Ukuran file terlalu besar! Maksimum 50MB');
        return;
    }

    const fileURL = URL.createObjectURL(file);

    if (validImageTypes.includes(fileType)) {
        const img = document.createElement('img');
        img.src = fileURL;
        backgroundPreview.innerHTML = '';
        backgroundPreview.appendChild(img);
    } else if (validVideoTypes.includes(fileType)) {
        const video = document.createElement('video');
        video.src = fileURL;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        backgroundPreview.innerHTML = '';
        backgroundPreview.appendChild(video);
    }

    backgroundPreview.style.display = 'block';

    // Simpan background ke sessionStorage
    sessionStorage.setItem('background', fileURL);
    // Alihkan ke halaman utama
    window.location.href = 'home.html';
});

// Ketika halaman home dibuka, set background
window.onload = function() {
    const background = sessionStorage.getItem('background');
    if (background) {
        document.body.style.backgroundImage = `url(${background})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.overflow = 'hidden'; // Menonaktifkan scroll
    }
};

// Fungsi pencarian
const searchForm = document.getElementById('searchForm');
const searchResults = document.getElementById('searchResults');

if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = document.getElementById('searchQuery').value;

        // Panggil API atau metode pencarian yang diinginkan
        // Untuk demonstrasi, kita akan menampilkan hasil palsu
        displaySearchResults(query);
    });
}

function displaySearchResults(query) {
    // Menghapus hasil pencarian sebelumnya
    searchResults.innerHTML = '';

    // Hasil pencarian palsu
    const results = [
        `Hasil untuk "${query}" 1: Video menarik dari YouTube`,
        `Hasil untuk "${query}" 2: Video menarik dari YouTube`,
        `Hasil untuk "${query}" 3: Video menarik dari YouTube`
    ];

    results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = result;
        searchResults.appendChild(div);
    });
}

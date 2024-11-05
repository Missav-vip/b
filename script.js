document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    const query = document.getElementById("searchQuery").value;
    const source = document.getElementById("searchSource").value;
    performSearch(query, source);
});

function performSearch(query, source) {
    let searchUrl = '';

    // Mengatur URL pencarian berdasarkan sumber yang dipilih
    switch(source) {
        case 'google':
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'duckduckgo':
            searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            break;
        case 'deepweb':
            searchUrl = `https://www.deepwebsites.com/?q=${encodeURIComponent(query)}`; // Contoh URL
            break;
        case 'darknet':
            searchUrl = `http://darknetsearch.com/?q=${encodeURIComponent(query)}`; // Contoh URL
            break;
        default:
            searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
    }

    // Membuka hasil pencarian di tab baru
    window.open(searchUrl, "_blank");
}

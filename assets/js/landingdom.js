document.addEventListener('DOMContentLoaded', function() {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    next.addEventListener('click', function() {
        const items = document.querySelectorAll('.item');
        const slide = document.querySelector('.slide');
        slide.appendChild(items[0].cloneNode(true)); // Menggunakan cloneNode untuk menduplikasi elemen
        slide.removeChild(items[0]); // Menghapus elemen asli setelah ditambahkan di akhir
    });

    prev.addEventListener('click', function() {
        const items = document.querySelectorAll('.item');
        const slide = document.querySelector('.slide');
        slide.insertBefore(items[items.length - 1].cloneNode(true), items[0]); // Memasukkan clone elemen sebelum elemen pertama
        slide.removeChild(items[items.length - 1]); // Menghapus elemen terakhir setelah ditambahkan di awal
    });
});

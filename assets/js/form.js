document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const namaProdukInput = document.getElementById('nama_produk');
      const gambarProdukInput = document.getElementById('gambar_produk');
      const hargaProdukInput = document.getElementById('harga_produk');
  
      const data = {
        nama_produk: namaProdukInput.value,
        gambar_produk: gambarProdukInput.value, // Menggunakan nilai dari input sebagai link gambar
        harga_produk: hargaProdukInput.value
      };
  
      try {
        const response = await fetch('https://crudcrud.com/api/cd48b280eee7444888738ff92e7fbcce/drink', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) {
          throw new Error('Gagal menambahkan data produk.');
        }
  
        alert('Data produk berhasil ditambahkan.');
        form.reset();
      } catch (error) {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      }
    });
  });
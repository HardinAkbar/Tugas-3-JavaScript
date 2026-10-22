// ==========================================
// 1. MEMBUAT ARRAY PRODUK TOKO
// ==========================================
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// ==========================================
// 2. FUNGSI MENAMPILKAN DAFTAR PRODUK
// ==========================================
function tampilkanProduk() {
    console.log("=== DAFTAR PRODUK TOKO ===");
    if (produkToko.length === 0) {
        console.log("Daftar produk kosong.");
        return;
    }
    produkToko.forEach(produk => {
        console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp ${produk.harga.toLocaleString()} | Stok: ${produk.stok}`);
    });
    console.log("==========================\n");
}

// ==========================================
// 3. FUNGSI MENAMBAH PRODUK BARU
// ==========================================
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    
    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);
    console.log(`Berhasil menambahkan produk: ${nama}`);
}

// ==========================================
// 4. FUNGSI MENGHAPUS PRODUK BERDASARKAN ID
// ==========================================
function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);
    
    if (index !== -1) {
        let produkDihapus = produkToko.splice(index, 1);
        console.log(`Berhasil menghapus produk dengan ID ${id} (${produkDihapus[0].nama}).`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// ==========================================
// PENGUJIAN / DEMONSTRASI PROGRAM
// ==========================================
console.log("--- 1. MENAMPILKAN PRODUK AWAL ---");
tampilkanProduk();

console.log("--- 2. MENAMBAHKAN PRODUK BARU ---");
tambahProduk("Headset", 150000, 12);
tampilkanProduk();

console.log("--- 3. MENGHAPUS PRODUK (ID: 2) ---");
hapusProduk(2);
tampilkanProduk();
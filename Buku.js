// Data buku
const bookData = {
    "10": [
        { name: "Kurikulum Merdeka: PR Pendidikan Pancasila Kelas X Semester 1 2024 SMA/SMK", price: 28000 },
        { name: "Kurikulum Merdeka: PR Bahasa Indonesia Kelas X Semester 1 2024 SMA/SMK", price: 28000 },
        { name: "Kurikulum Merdeka: PR Bahasa Inggris Kelas X Semester 1 2023 SMA/SMK", price: 28000 },
        { name: "Kurikulum Merdeka: PR Matematika Kelas X Semester 1 2023 SMA/SMK", price: 35000 },
        { name: "Kurikulum Merdeka: PR PAI dan Budi Pekerti Kelas X Semester 1 2023 SMA/SMK", price: 35000 },
        { name: "Kurikulum Merdeka: PR PJOK Kelas X Semester 1 2023 SMA/SMK", price: 22000 },
        { name: "Kurikulum Merdeka: PR Informatika Kelas X Semester 1 2023 SMA/SMK", price: 28000 },
        { name: "Kurikulum Merdeka: PR IPS Sejarah Kelas X Semester 1 2024 SMA", price: 22000 },
        { name: "Kurikulum Merdeka: PR IPS Sosiologi Kelas X Semester 1 2024 SMA", price: 18000 },
        { name: "Kurikulum Merdeka: PR IPS Geografi Kelas X Semester 1 2024 SMA", price: 18000 },
        { name: "Kurikulum Merdeka: PR IPS Ekonomi Kelas X Semester 1 2024 SMA", price: 18000 },
        { name: "Kurikulum Merdeka: PR IPA Biologi Kelas X Semester 1 2024 SMA", price: 18000 },
        { name: "Kurikulum Merdeka: PR IPA Fisika Kelas X Semester 1 2024 SMA", price: 18000 },
        { name: "Kurikulum Merdeka: PR IPA Kimia Kelas X Semester 1 2024 SMA", price: 22000 }
    ],
    "11": [
        { name: "Kurikulum Merdeka: PR Pendidikan Pancasila Kelas XI Semester 1 2024 SMA/SMK", price: 25000 },
        { name: "Kurikulum Merdeka: PR Bahasa Indonesia Kelas XI Semester 1 2023 SMA/SMK", price: 28000 },
        { name: "Kurikulum Merdeka: PR Bahasa Inggris Kelas XI Semester 1 2023 SMA/SMK", price: 28000 },
        { name: "Kurikulum Merdeka: PR Matematika Kelas XI Semester 1 2023 SMA/SMK", price: 22000 },
        { name: "Kurikulum Merdeka: PR PAI dan Budi Pekerti Kelas XI Semester 1 2023 SMA/SMK", price: 35000 },
        { name: "Kurikulum Merdeka: PR PJOK Kelas XI Semester 1 2023 SMA/SMK", price: 22000 },
        { name: "Kurikulum Merdeka: PR Informatika Kelas XI Semester 1 2023 SMA/SMK", price: 28000 },
        { name: "Kurikulum Merdeka: PR Sejarah Kelas XI Semester 1 2023 SMA/SMK", price: 28000 },
        { name: "Kurikulum Merdeka: PR Ekonomi Kelas XI Semester 1 2023 SMA", price: 32000 },
        { name: "Kurikulum Merdeka: PR Geografi Kelas XI Semester 1 2023 SMA", price: 28000 },
        { name: "Kurikulum Merdeka: PR Sosiologi Kelas XI Semester 1 2023 SMA", price: 25000 },
        { name: "Kurikulum Merdeka: PR Antropologi Kelas XI Semester 1 2023 SMA", price: 25000 },
        { name: "Kurikulum Merdeka: PR Matematika (Tingkat Lanjut) Kelas XI Semester 1 2023 SMA", price: 28000 },
        { name: "Kurikulum Merdeka: PR Biologi Kelas XI Semester 1 2023 SMA", price: 40000 },
        { name: "Kurikulum Merdeka: PR Fisika Kelas XI Semester 1 2023 SMA", price: 40000 },
        { name: "Kurikulum Merdeka: PR Kimia Kelas XI Semester 1 2023 SMA", price: 40000 }
    ],
    "12": [
        { name: "Kurikulum Merdeka: PR Pendidikan Pancasila Kelas XII Tahunan 2024 SMA/SMK", price: 38000 },
        { name: "Kurikulum Merdeka: PR Bahasa Indonesia Kelas XII Tahunan 2024 SMA/SMK", price: 40000 },
        { name: "Kurikulum Merdeka: PR Bahasa Inggris Kelas XII Tahunan 2024 SMA/SMK", price: 38000 },
        { name: "Kurikulum Merdeka: PR Matematika Kelas XII Tahunan 2024 SMA/SMK", price: 38000 },
        { name: "Kurikulum Merdeka: PR PAI dan Budi Pekerti Kelas XII Tahunan 2024 SMA/SMK", price: 50000 },
        { name: "Kurikulum Merdeka: PR PJOK Kelas XII Tahunan 2024 SMA/SMK", price: 44000 },
        { name: "Kurikulum Merdeka: PR Informatika Kelas XII Tahunan 2024 SMA/SMK", price: 44000 },
        { name: "Kurikulum Merdeka: PR Sejarah Kelas XII Tahunan 2024 SMA/SMK", price: 46000 },
        { name: "Kurikulum Merdeka: PR Ekonomi Kelas XII Tahunan 2024 SMA", price: 48000 },
        { name: "Kurikulum Merdeka: PR Geografi Kelas XII Tahunan 2024 SMA", price: 40000 },
        { name: "Kurikulum Merdeka: PR Sosiologi Kelas XII Tahunan 2024 SMA", price: 44000 },
        { name: "Kurikulum Merdeka: PR Antropologi Kelas XII Tahunan 2024 SMA", price: 46000 },
        { name: "Kurikulum Merdeka: PR Matematika (Tingkat Lanjut) Kelas XII Tahunan 2024 SMA", price: 44000 },
        { name: "Kurikulum Merdeka: PR Biologi Kelas XII Tahunan 2024 SMA", price: 46000 },
        { name: "Kurikulum Merdeka: PR Fisika Kelas XII Tahunan 2024 SMA", price: 60000 },
        { name: "Kurikulum Merdeka: PR Kimia Kelas XII Tahunan 2024 SMA", price: 46000 }
    ]
};

// Elemen DOM
const classSelect = document.getElementById('class-select');
const bookListContainer = document.getElementById('book-list-container');
const bookList = document.getElementById('book-list');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');
const selectedBooksDiv = document.getElementById('selected-books');
const totalPriceSpan = document.getElementById('total-price');
const searchInput = document.getElementById('search-input');
const noResultsDiv = document.getElementById('no-results');
const selectAllBtn = document.getElementById('select-all-btn');
const resetBtn = document.getElementById('reset-btn');

// Variabel untuk menyimpan state
let currentClass = '';
let selectedBooks = new Set(); // Menggunakan Set untuk menyimpan ID buku yang dipilih

// Event listener untuk perubahan pilihan kelas
classSelect.addEventListener('change', function() {
    currentClass = this.value;
    selectedBooks.clear(); // Reset pilihan saat ganti kelas
    
    // Reset tampilan
    bookList.innerHTML = '';
    resultDiv.style.display = 'none';
    searchInput.value = '';
    noResultsDiv.style.display = 'none';
    selectedBooksDiv.innerHTML = '';
    totalPriceSpan.textContent = 'Rp 0';
    
    if (currentClass) {
        // Tampilkan daftar buku
        bookListContainer.style.display = 'block';
        calculateBtn.style.display = 'block';
        
        // Tampilkan semua buku
        displayBooks(bookData[currentClass]);
    } else {
        bookListContainer.style.display = 'none';
        calculateBtn.style.display = 'none';
    }
});

// Event listener untuk pencarian
searchInput.addEventListener('input', function() {
    if (!currentClass) return;
    
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = bookData[currentClass].filter(book => 
        book.name.toLowerCase().includes(searchTerm)
    );
    
    // Tampilkan buku yang sesuai pencarian
    displayBooks(filteredBooks);
    
    // Tampilkan pesan jika tidak ada hasil
    noResultsDiv.style.display = filteredBooks.length === 0 ? 'block' : 'none';
});

// Event listener untuk tombol hitung (penting)
calculateBtn.addEventListener('click', function() {
    if (selectedBooks.size === 0) {
        alert('Pilih setidaknya satu buku!');
        return;
    }
    
    let total = 0;
    let selectedBooksHTML = '';
    
    // Hitung total dari buku yang dipilih
    bookData[currentClass].forEach((book, index) => {
        if (selectedBooks.has(index)) {
            total += book.price;
            selectedBooksHTML += `
                <div class="book-selected">
                    <strong>${book.name}</strong> - Rp ${book.price.toLocaleString('id-ID')}
                </div>
            `;
        }
    });
    
    selectedBooksDiv.innerHTML = selectedBooksHTML;
    totalPriceSpan.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    resultDiv.style.display = 'block';
    
    // Scroll ke hasil
    resultDiv.scrollIntoView({ behavior: 'smooth' });
});

// Event listener untuk tombol Pilih Semua
selectAllBtn.addEventListener('click', function() {
    if (!currentClass) return;
    
    const checkboxes = document.querySelectorAll('.book-checkbox');
    const displayedBooks = Array.from(checkboxes).map(cb => parseInt(cb.id.split('-')[1]));
    
    // Tambahkan semua buku yang sedang ditampilkan ke Set
    displayedBooks.forEach(index => selectedBooks.add(index));
    
    // Update checkbox
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
});

// Event listener untuk tombol Reset
resetBtn.addEventListener('click', function() {
    selectedBooks.clear();
    const checkboxes = document.querySelectorAll('.book-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset hasil perhitungan
    resultDiv.style.display = 'none';
    selectedBooksDiv.innerHTML = '';
    totalPriceSpan.textContent = 'Rp 0';
});

// Fungsi untuk menampilkan buku
function displayBooks(books) {
    bookList.innerHTML = '';
    
    if (books.length === 0) {
        noResultsDiv.style.display = 'block';
        return;
    }
    
    noResultsDiv.style.display = 'none';
    
    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        
        // Buat ID unik berdasarkan index asli di array data
        const originalIndex = bookData[currentClass].indexOf(book);
        const isChecked = selectedBooks.has(originalIndex);
        
        bookItem.innerHTML = `
            <input type="checkbox" class="book-checkbox" id="book-${originalIndex}" 
                   data-price="${book.price}" ${isChecked ? 'checked' : ''}>
            <label for="book-${originalIndex}">
                <strong>${book.name}</strong> - Rp ${book.price.toLocaleString('id-ID')}
            </label>
        `;
        bookList.appendChild(bookItem);
        
        // Tambahkan event listener untuk checkbox
        const checkbox = bookItem.querySelector('.book-checkbox');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedBooks.add(originalIndex);
            } else {
                selectedBooks.delete(originalIndex);
            }
        });
    });
}
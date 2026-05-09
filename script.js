// ==================== TEMPLATES ====================
const templates = {
    matematika: {
        mapel: "Matematika",
        materi: "Persamaan Linear Satu Variabel (PLSV)",
        cp: "<p>Pada fase D, peserta didik dapat menyelesaikan persamaan linear satu variabel (PLSV) dan menggunakannya untuk menyelesaikan masalah kontekstual sehari-hari.</p>",
        tujuan: "<p>Menjelaskan PLSV, Menganalisis persamaan, Menyelesaikan soal cerita, Menyusun model matematika</p>",
        profil: "<ul><li>Beriman: Doa dan syukur</li><li>Mandiri: Tugas individu</li><li>Bernalar Kritis: Analisis soal</li><li>Kreatif: Buat soal sendiri</li><li>Gotong Royong: Diskusi kelompok</li></ul>",
        kompetensiAwal: "<p>Memahami operasi hitung bilangan bulat dan bentuk aljabar sederhana.</p>",
        materiKonsep: `<p><strong>PLSV (Persamaan Linear Satu Variabel)</strong> adalah persamaan yang memiliki satu variabel dengan pangkat tertinggi 1.</p>
<p><strong>Bentuk umum:</strong> ax + b = c, dengan a ≠ 0</p>
<p><strong>Komponen:</strong></p>
<ul>
<li>Variabel (x): lambang yang belum diketahui nilainya</li>
<li>Koefisien (a): bilangan yang mengikuti variabel</li>
<li>Konstanta (b, c): bilangan yang tidak diikuti variabel</li>
</ul>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr><th style="border: 1px solid #000; padding: 8px;">Contoh</th><th style="border: 1px solid #000; padding: 8px;">Variabel</th><th style="border: 1px solid #000; padding: 8px;">Koefisien</th><th style="border: 1px solid #000; padding: 8px;">Konstanta</th></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">2x + 5 = 13</td><td style="border: 1px solid #000; padding: 8px;">x</td><td style="border: 1px solid #000; padding: 8px;">2</td><td style="border: 1px solid #000; padding: 8px;">5 dan 13</td></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">3y - 7 = 11</td><td style="border: 1px solid #000; padding: 8px;">y</td><td style="border: 1px solid #000; padding: 8px;">3</td><td style="border: 1px solid #000; padding: 8px;">-7 dan 11</td></tr>
</table>`,
        materiPraktek: `<p><strong>Contoh soal cerita:</strong></p>
<p>Andi membeli 5 buku tulis @Rp4.000 dan 2 pensil dengan total Rp26.000. Berapa harga 1 pensil?</p>
<p><strong>Penyelesaian:</strong></p>
<p>5(4.000) + 2x = 26.000<br>20.000 + 2x = 26.000<br>2x = 6.000<br>x = 3.000</p>
<p><strong>Jadi harga 1 pensil adalah Rp3.000</strong></p>`,
        model: "Problem Based Learning (PBL)",
        pendekatan: "Saintifik / Deep Learning",
        metode: "<p>Diskusi kelompok, tanya jawab, presentasi, penugasan</p>",
        pendahuluan: "<p>Salam, doa, absensi, apersepsi (pengalaman belanja di kantin), motivasi, penyampaian tujuan pembelajaran.</p>",
        inti: "<ol><li>Orientasi masalah: Guru menyajikan soal cerita tentang belanja</li><li>Mengorganisasi siswa: Membagi kelompok diskusi</li><li>Penyelidikan: Siswa mengubah soal ke model PLSV</li><li>Presentasi: Perwakilan kelompok mempresentasikan hasil</li><li>Evaluasi: Guru menguatkan konsep PLSV</li></ol>",
        penutup: "<p>Refleksi, kesimpulan, umpan balik, tindak lanjut (soal latihan), doa penutup.</p>",
        pemahaman: "<p>PLSV adalah alat matematika yang berguna untuk menyelesaikan berbagai masalah hitung sehari-hari.</p>",
        pemantik: "<ol><li>Bagaimana cara mengetahui harga 1 bolpoin jika tahu total belanja?</li><li>Mengapa kita perlu mengubah soal cerita ke bentuk matematika?</li><li>Apa perbedaan persamaan dan pertidaksamaan?</li><li>Bagaimana PLSV membantu dalam kehidupan sehari-hari?</li><li>Apa yang terjadi jika informasi dalam soal kurang lengkap?</li></ol>",
        diagnostik: "<p>Soal cerita sederhana: 'Jika 2x + 3 = 9, berapa nilai x?'</p>",
        formatif: "<p>Observasi keaktifan diskusi, tanya jawab lisan, pengecekan LKPD.</p>",
        sumatif: "<p>Tes tertulis berupa soal uraian (3 soal) dikerjakan individu.</p>",
        soal: "<ol><li>Tentukan nilai x dari persamaan 3x + 7 = 25!</li><li>Selesaikan persamaan 2(x - 3) = 12!</li><li>Harga 3 kg apel dan 2 kg jeruk adalah Rp65.000. Jika harga 1 kg apel Rp15.000, berapa harga 1 kg jeruk?</li></ol>",
        kunci: "<p>1. 3x = 18 → x = 6<br>2. 2x - 6 = 12 → 2x = 18 → x = 9<br>3. 3(15.000) + 2y = 65.000 → 45.000 + 2y = 65.000 → 2y = 20.000 → y = 10.000</p>",
        remedial: "Pembelajaran ulang dengan pendekatan yang lebih sederhana dan contoh soal yang lebih mudah.",
        pengayaan: "Soal tantangan (PLSV bentuk pecahan), menjadi tutor sebaya, membuat soal cerita."
    },
    ipa: {
        mapel: "IPA",
        materi: "Tata Surya",
        cp: "<p>Menganalisis sistem tata surya dan pengaruhnya terhadap kehidupan.</p>",
        tujuan: "<p>Menjelaskan susunan tata surya, Menganalisis rotasi bumi, Mempraktikkan model gerak bumi-bulan</p>",
        profil: "<ul><li>Beriman: Bersyukur atas ciptaan Tuhan</li><li>Mandiri: Praktik individu</li><li>Bernalar Kritis: Analisis gerhana</li><li>Kreatif: Membuat model sederhana</li><li>Gotong Royong: Diskusi kelompok</li></ul>",
        kompetensiAwal: "<p>Memahami konsep siang dan malam, gerak benda</p>",
        materiKonsep: `<p><strong>Tata Surya</strong> adalah kumpulan benda langit yang terdiri atas Matahari sebagai pusat dan planet-planet yang mengelilinginya.</p>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr><th style="border: 1px solid #000; padding: 8px;">Planet</th><th style="border: 1px solid #000; padding: 8px;">Jarak ke Matahari (juta km)</th><th style="border: 1px solid #000; padding: 8px;">Diameter (km)</th></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">Merkurius</td><td style="border: 1px solid #000; padding: 8px;">57.9</td><td style="border: 1px solid #000; padding: 8px;">4.879</td></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">Venus</td><td style="border: 1px solid #000; padding: 8px;">108.2</td><td style="border: 1px solid #000; padding: 8px;">12.104</td></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">Bumi</td><td style="border: 1px solid #000; padding: 8px;">149.6</td><td style="border: 1px solid #000; padding: 8px;">12.742</td></tr>
</table>`,
        materiPraktek: "<p>Eksperimen sederhana: Gunakan senter sebagai Matahari dan bola sebagai Bumi untuk memahami rotasi dan revolusi.</p>",
        model: "Discovery Learning",
        pendekatan: "Saintifik",
        metode: "<p>Eksperimen, diskusi, presentasi</p>",
        pendahuluan: "<p>Salam, doa, absensi, apersepsi tentang fenomena siang-malam, motivasi</p>",
        inti: "<ol><li>Stimulasi: Menonton video tata surya</li><li>Identifikasi masalah: Mengapa terjadi gerhana?</li><li>Pengumpulan data: Membaca buku teks</li><li>Pengolahan data: Diskusi kelompok</li><li>Verifikasi: Presentasi hasil</li><li>Kesimpulan: Menyimpulkan materi</li></ol>",
        penutup: "<p>Refleksi, kesimpulan, kuis, doa</p>",
        pemahaman: "<p>Tata surya teratur karena gaya gravitasi Matahari. Gerak rotasi dan revolusi bumi mempengaruhi kehidupan.</p>",
        pemantik: "<ol><li>Mengapa siang dan malam terjadi?</li><li>Mengapa gerhana tidak terjadi setiap bulan?</li><li>Apa perbedaan rotasi dan revolusi?</li></ol>",
        diagnostik: "<p>Tanya jawab tentang fenomena alam dasar</p>",
        formatif: "<p>Observasi eksperimen, tanya jawab</p>",
        sumatif: "<p>Tes tertulis pilihan ganda dan uraian</p>",
        soal: "<ol><li>Jelaskan penyebab gerhana matahari!</li><li>Apa perbedaan rotasi dan revolusi bumi?</li><li>Sebutkan urutan planet dari Matahari!</li></ol>",
        kunci: "<p>1. Gerhana matahari terjadi saat bulan di antara matahari dan bumi<br>2. Rotasi: siang-malam, Revolusi: pergantian musim<br>3. Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus</p>",
        remedial: "Bimbingan individu dengan alat peraga sederhana",
        pengayaan: "Membuat model tata surya 3D"
    }
};

// Template alias untuk mapel lain
templates.bahasaindonesia = {
    mapel: "Bahasa Indonesia",
    materi: "Teks Deskripsi",
    cp: "<p>Menulis teks deskripsi dengan struktur dan kebahasaan yang tepat.</p>",
    tujuan: "<p>Mengidentifikasi struktur teks, Menulis deskripsi objek, Mempresentasikan hasil</p>",
    profil: "<ul><li>Beriman: Mengungkapkan syukur</li><li>Mandiri: Menulis mandiri</li><li>Bernalar Kritis: Analisis teks</li><li>Kreatif: Gaya bahasa</li><li>Gotong Royong: Saling mengomentari</li></ul>",
    kompetensiAwal: "<p>Mampu membaca dan menulis kalimat sederhana</p>",
    materiKonsep: `<p><strong>Teks Deskripsi</strong> adalah teks yang menggambarkan suatu objek sehingga pembaca seolah-olah melihatnya.</p>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr><th style="border: 1px solid #000; padding: 8px;">Struktur</th><th style="border: 1px solid #000; padding: 8px;">Penjelasan</th></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">Identifikasi</td><td style="border: 1px solid #000; padding: 8px;">Pengenalan objek</td></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">Deskripsi Bagian</td><td style="border: 1px solid #000; padding: 8px;">Gambaran rinci objek</td></tr>
</table>`,
    materiPraktek: "<p>Contoh: 'Kucingku bernama Miko. Bulunya putih bersih seperti kapas.'</p>",
    model: "Project Based Learning",
    pendekatan: "Text Based Learning",
    metode: "<p>Membaca, menulis, presentasi</p>",
    pendahuluan: "<p>Salam, doa, absensi, apersepsi tentang objek favorit</p>",
    inti: "<ol><li>Membaca contoh teks</li><li>Mengidentifikasi struktur</li><li>Menulis teks deskripsi</li><li>Presentasi</li></ol>",
    penutup: "<p>Refleksi, kesimpulan, tugas perbaikan</p>",
    pemahaman: "<p>Deskripsi membuat pembaca seolah melihat objek</p>",
    pemantik: "<ol><li>Apa ciri teks deskripsi?</li><li>Bagaimana agar deskripsi hidup?</li></ol>",
    diagnostik: "<p>Menyebutkan ciri objek di sekitar</p>",
    formatif: "<p>Cek draft tulisan</p>",
    sumatif: "<p>Penilaian produk teks deskripsi</p>",
    soal: "<ol><li>Sebutkan struktur teks deskripsi!</li><li>Tulis contoh kalimat deskripsi!</li></ol>",
    kunci: "<p>1. Identifikasi dan deskripsi bagian<br>2. Contoh kalimat deskriptif</p>",
    remedial: "Bimbingan menulis kalimat sederhana",
    pengayaan: "Menulis deskripsi tempat wisata"
};

templates.bahasainggris = {
    mapel: "Bahasa Inggris",
    materi: "Descriptive Text",
    cp: "<p>Mengungkapkan deskripsi orang/benda secara lisan dan tulisan.</p>",
    tujuan: "<p>Identify vocabulary, Write descriptive text, Present description</p>",
    profil: "<ul><li>Beriman: Gratitude to God</li><li>Mandiri: Write independently</li><li>Bernalar Kritis: Text analysis</li><li>Kreatif: Creative writing</li><li>Gotong Royong: Pair work</li></ul>",
    kompetensiAwal: "<p>Basic vocabulary about people and things</p>",
    materiKonsep: `<p><strong>Descriptive Text</strong> describes a person, place, or thing.</p>
<table border="1" style="border-collapse: collapse; width: 100%;">
    <tr><th style="border: 1px solid #000; padding: 8px;">Structure</th><th style="border: 1px solid #000; padding: 8px;">Function</th></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">Identification</td><td style="border: 1px solid #000; padding: 8px;">Introduces the subject</td></tr>
    <tr><td style="border: 1px solid #000; padding: 8px;">Description</td><td style="border: 1px solid #000; padding: 8px;">Describes characteristics</td></tr>
</table>`,
    materiPraktek: "<p>Example: 'My mother is beautiful and kind. She has long black hair.'</p>",
    model: "Cooperative Learning",
    pendekatan: "Communicative",
    metode: "<p>Pair work, presentation</p>",
    pendahuluan: "<p>Greeting, prayer, ice breaking</p>",
    inti: "<ol><li>Watch video examples</li><li>Identify structure</li><li>Write descriptive text</li><li>Present in pairs</li></ol>",
    penutup: "<p>Reflection, summary, homework</p>",
    pemahaman: "<p>Descriptive text helps readers imagine the object</p>",
    pemantik: "<ol><li>How to describe someone?</li><li>What adjectives to use?</li></ol>",
    diagnostik: "<p>Simple Q&A about favorite things</p>",
    formatif: "<p>Check draft writing</p>",
    sumatif: "<p>Final descriptive text writing</p>",
    soal: "<ol><li>What is descriptive text?</li><li>Give an example of descriptive text!</li></ol>",
    kunci: "<p>1. Text that describes person/place/thing<br>2. Example answer provided</p>",
    remedial: "Simple sentence drilling",
    pengayaan: "Create a video describing a room"
};

// Mapel lainnya
templates.ips = {
    mapel: "IPS", materi: "Kerja Sama ASEAN", cp: "<p>Menganalisis interaksi antarruang di Asia Tenggara.</p>",
    tujuan: "<p>Mengidentifikasi negara ASEAN, Menganalisis kerja sama ekonomi</p>",
    profil: "<ul><li>Beriman: Bersyukur</li><li>Mandiri: Belajar mandiri</li><li>Bernalar Kritis: Analisis dampak</li><li>Kreatif: Peta konsep</li><li>Gotong Royong: Diskusi</li></ul>",
    kompetensiAwal: "<p>Mengetahui negara tetangga</p>",
    materiKonsep: "<p>ASEAN didirikan 8 Agustus 1967. Anggota: Indonesia, Malaysia, Singapura, Thailand, Filipina, Brunei, Vietnam, Laos, Myanmar, Kamboja.</p>",
    materiPraktek: "<p>Membuat peta pikiran kerja sama ASEAN</p>",
    model: "Cooperative Learning", pendekatan: "Kontekstual", metode: "<p>Diskusi, presentasi</p>",
    pendahuluan: "<p>Salam, doa, apersepsi berita ASEAN</p>",
    inti: "<ol><li>Studi literatur</li><li>Diskusi kelompok</li><li>Peta pikiran</li><li>Presentasi</li></ol>",
    penutup: "<p>Refleksi, kesimpulan</p>",
    pemahaman: "<p>Kerja sama ASEAN menguntungkan semua anggota</p>",
    pemantik: "<ol><li>Apa manfaat MEA?</li><li>Mengapa perlu kerja sama?</li></ol>",
    diagnostik: "<p>Tanya jawab negara tetangga</p>",
    formatif: "<p>Observasi diskusi</p>",
    sumatif: "<p>Tes tertulis</p>",
    soal: "<ol><li>Sebutkan negara ASEAN!</li><li>Apa manfaat MEA?</li></ol>",
    kunci: "<p>10 negara, MEA memudahkan perdagangan</p>",
    remedial: "Peta konsep sederhana", pengayaan: "Essay tantangan ASEAN"
};

templates.ppkn = {
    mapel: "PPKn", materi: "Norma Masyarakat", cp: "<p>Menganalisis norma dalam kehidupan.</p>",
    tujuan: "<p>Menjelaskan norma, Menganalisis sanksi</p>",
    profil: "<ul><li>Beriman: Sesuai ajaran</li><li>Mandiri: Disiplin</li><li>Bernalar Kritis: Analisis kasus</li><li>Kreatif: Simulasi</li><li>Gotong Royong: Diskusi</li></ul>",
    kompetensiAwal: "<p>Mengerti aturan sekolah</p>",
    materiKonsep: "<p>Norma: agama, kesusilaan, kesopanan, hukum</p>",
    materiPraktek: "<p>Identifikasi pelanggaran norma</p>",
    model: "Problem Based Learning", pendekatan: "Saintifik", metode: "<p>Studi kasus</p>",
    pendahuluan: "<p>Salam, doa, apersepsi aturan</p>",
    inti: "<ol><li>Kasus</li><li>Diskusi</li><li>Simulasi</li><li>Kesimpulan</li></ol>",
    penutup: "<p>Refleksi</p>",
    pemahaman: "<p>Norma menjaga ketertiban</p>",
    pemantik: "<ol><li>Apa akibat tanpa aturan?</li></ol>",
    diagnostik: "<p>Tanya jawab aturan</p>",
    formatif: "<p>Observasi diskusi</p>",
    sumatif: "<p>Tes tertulis</p>",
    soal: "<ol><li>Sebutkan 4 norma!</li></ol>",
    kunci: "<p>Agama, kesusilaan, kesopanan, hukum</p>",
    remedial: "Pembahasan ulang", pengayaan: "Analisis kasus di media"
};

templates.senibudaya = {
    mapel: "Seni Budaya", materi: "Gambar Ilustrasi", cp: "<p>Mengekspresikan diri melalui ilustrasi.</p>",
    tujuan: "<p>Mengidentifikasi unsur, Membuat ilustrasi</p>",
    profil: "<ul><li>Beriman: Karya Tuhan</li><li>Mandiri: Ekspresi</li><li>Bernalar Kritis: Komposisi</li><li>Kreatif: Ide unik</li><li>Gotong Royong: Apresiasi</li></ul>",
    kompetensiAwal: "<p>Pernah menggambar</p>",
    materiKonsep: "<p>Ilustrasi: gambar yang memperjelas cerita</p>",
    materiPraktek: "<p>Membuat ilustrasi cerita rakyat</p>",
    model: "Project Based Learning", pendekatan: "Student Centered", metode: "<p>Praktik</p>",
    pendahuluan: "<p>Salam, doa, apersepsi gambar</p>",
    inti: "<ol><li>Amati contoh</li><li>Praktik</li><li>Pameran</li></ol>",
    penutup: "<p>Refleksi</p>",
    pemahaman: "<p>Ilustrasi memperjelas cerita</p>",
    pemantik: "<ol><li>Apa itu ilustrasi?</li></ol>",
    diagnostik: "<p>Menggambar bebas</p>",
    formatif: "<p>Cek sketsa</p>",
    sumatif: "<p>Penilaian produk</p>",
    soal: "<ol><li>Apa itu ilustrasi?</li></ol>",
    kunci: "<p>Gambar memperjelas cerita</p>",
    remedial: "Latihan bentuk dasar", pengayaan: "Ilustrasi digital"
};

templates.pjok = {
    mapel: "PJOK", materi: "Sepak Bola (Passing)", cp: "<p>Mempraktikkan variasi gerak bola besar.</p>",
    tujuan: "<p>Menjelaskan teknik passing, Mempraktikkan passing</p>",
    profil: "<ul><li>Beriman: Jaga kesehatan</li><li>Mandiri: Latihan</li><li>Bernalar Kritis: Strategi</li><li>Kreatif: Variasi</li><li>Gotong Royong: Kerja tim</li></ul>",
    kompetensiAwal: "<p>Pernah menendang bola</p>",
    materiKonsep: "<p>Passing: kaki dalam, luar, punggung</p>",
    materiPraktek: "<p>Latihan passing berpasangan</p>",
    model: "Cooperative Learning", pendekatan: "Student Centered", metode: "<p>Praktik</p>",
    pendahuluan: "<p>Salam, doa, pemanasan</p>",
    inti: "<ol><li>Demonstrasi</li><li>Praktik berpasangan</li><li>Permainan kecil</li></ol>",
    penutup: "<p>Pendinginan, refleksi</p>",
    pemahaman: "<p>Passing membangun serangan</p>",
    pemantik: "<ol><li>Apa teknik passing?</li></ol>",
    diagnostik: "<p>Tanya jawab olahraga</p>",
    formatif: "<p>Observasi praktik</p>",
    sumatif: "<p>Tes praktik</p>",
    soal: "<ol><li>Sebutkan 3 teknik passing!</li></ol>",
    kunci: "<p>Kaki dalam, luar, punggung</p>",
    remedial: "Latihan jarak pendek", pengayaan: "Passing target bergerak"
};

templates.prakarya = {
    mapel: "Prakarya", materi: "Kerajinan Limbah", cp: "<p>Merancang produk dari limbah.</p>",
    tujuan: "<p>Mengidentifikasi limbah, Merancang produk</p>",
    profil: "<ul><li>Beriman: Menjaga bumi</li><li>Mandiri: Produk sendiri</li><li>Bernalar Kritis: Memilih bahan</li><li>Kreatif: Desain unik</li><li>Gotong Royong: Kerja kelompok</li></ul>",
    kompetensiAwal: "<p>Mengenal sampah</p>",
    materiKonsep: "<p>Prinsip 3R: Reduce, Reuse, Recycle</p>",
    materiPraktek: "<p>Membuat pot dari botol plastik</p>",
    model: "Project Based Learning", pendekatan: "Entrepreneurship", metode: "<p>Praktik</p>",
    pendahuluan: "<p>Salam, doa, apersepsi sampah</p>",
    inti: "<ol><li>Amati contoh</li><li>Rancang</li><li>Praktik</li><li>Pameran</li></ol>",
    penutup: "<p>Refleksi</p>",
    pemahaman: "<p>Limbah bernilai ekonomi</p>",
    pemantik: "<ol><li>Apa itu 3R?</li></ol>",
    diagnostik: "<p>Tanya jawab sampah</p>",
    formatif: "<p>Cek desain</p>",
    sumatif: "<p>Penilaian produk</p>",
    soal: "<ol><li>Apa itu 3R?</li></ol>",
    kunci: "<p>Reduce, Reuse, Recycle</p>",
    remedial: "Produk sederhana", pengayaan: "Produk bernilai jual"
};

// ==================== STATE ====================
let isDarkMode = localStorage.getItem('rppGenius_dark') === 'true';

// ==================== FORMAT EDITOR ====================
function formatEditor(editorId, command) {
    const editor = document.getElementById(editorId);
    if (!editor) {
        console.warn('Editor not found:', editorId);
        return;
    }
    
    editor.focus();
    
    if (command === 'inserttable') {
        const rows = prompt('Jumlah baris:', 3);
        const cols = prompt('Jumlah kolom:', 3);
        if (rows && cols) {
            let table = '<table border="1" style="border-collapse: collapse; width: 100%;">';
            for (let i = 0; i < parseInt(rows); i++) {
                table += '<tr>';
                for (let j = 0; j < parseInt(cols); j++) {
                    if (i === 0) {
                        table += '<th style="border: 1px solid #000; padding: 8px;">Header</th>';
                    } else {
                        table += '<td style="border: 1px solid #000; padding: 8px;">Isi</td>';
                    }
                }
                table += '</tr>';
            }
            table += '</table><br>';
            document.execCommand('insertHTML', false, table);
        }
    } else if (command === 'insertUnorderedList') {
        document.execCommand('insertUnorderedList', false, null);
    } else if (command === 'insertOrderedList') {
        document.execCommand('insertOrderedList', false, null);
    } else {
        document.execCommand(command, false, null);
    }
    
    // Trigger update preview
    const textareaId = editorId.replace('Editor', '');
    const textarea = document.getElementById(textareaId);
    if (textarea) {
        textarea.value = editor.innerHTML;
    }
    updatePreview();
}

// ==================== INIT RICH EDITORS ====================
function initRichEditors() {
    const editorIds = [
        'cpEditor', 'tujuanEditor', 'kompetensiAwalEditor', 'profilEditor',
        'metodeEditor', 'materiKonsepEditor', 'materiPraktekEditor',
        'pemahamanEditor', 'pemantikEditor', 'pendahuluanEditor',
        'intiEditor', 'penutupEditor', 'diagnostikEditor', 'formatifEditor',
        'sumatifEditor', 'soalEditor', 'kunciEditor'
    ];
    
    editorIds.forEach(editorId => {
        const editor = document.getElementById(editorId);
        const textareaId = editorId.replace('Editor', '');
        const textarea = document.getElementById(textareaId);
        
        if (editor && textarea) {
            // Set initial content from textarea
            if (textarea.value) {
                editor.innerHTML = textarea.value;
            }
            
            // Save on input
            editor.addEventListener('input', function() {
                textarea.value = editor.innerHTML;
                updatePreview();
            });
            
            // Handle paste to preserve formatting
            editor.addEventListener('paste', function(e) {
                e.preventDefault();
                const html = e.clipboardData.getData('text/html');
                const text = e.clipboardData.getData('text/plain');
                if (html && html.includes('<table')) {
                    document.execCommand('insertHTML', false, html);
                } else if (html) {
                    document.execCommand('insertHTML', false, html);
                } else {
                    document.execCommand('insertText', false, text);
                }
                textarea.value = editor.innerHTML;
                updatePreview();
            });
        }
    });
}

// ==================== LOAD TEMPLATE ====================
function loadTemplate(mapel) {
    const t = templates[mapel];
    if (!t) {
        console.warn('Template not found:', mapel);
        return;
    }
    
    // Set text inputs
    document.getElementById('sekolah').value = "SMP Negeri 1 Contoh";
    document.getElementById('mapel').value = t.mapel;
    document.getElementById('materi').value = t.materi;
    document.getElementById('kelas').value = "VII / D";
    document.getElementById('semester').value = "Ganjil";
    document.getElementById('tahun').value = "2025/2026";
    document.getElementById('alokasi').value = "2 x 40 menit";
    document.getElementById('guru').value = "Andi Saputra, S.Pd.";
    document.getElementById('model').value = t.model;
    document.getElementById('pendekatan').value = t.pendekatan;
    document.getElementById('remedial').value = t.remedial;
    document.getElementById('pengayaan').value = t.pengayaan;
    
    // Set rich editors
    const richEditors = [
        { id: 'cp', content: t.cp },
        { id: 'tujuan', content: t.tujuan },
        { id: 'kompetensiAwal', content: t.kompetensiAwal },
        { id: 'profil', content: t.profil },
        { id: 'metode', content: t.metode },
        { id: 'materiKonsep', content: t.materiKonsep },
        { id: 'materiPraktek', content: t.materiPraktek },
        { id: 'pemahaman', content: t.pemahaman },
        { id: 'pemantik', content: t.pemantik },
        { id: 'pendahuluan', content: t.pendahuluan },
        { id: 'inti', content: t.inti },
        { id: 'penutup', content: t.penutup },
        { id: 'diagnostik', content: t.diagnostik },
        { id: 'formatif', content: t.formatif },
        { id: 'sumatif', content: t.sumatif },
        { id: 'soal', content: t.soal },
        { id: 'kunci', content: t.kunci }
    ];
    
    richEditors.forEach(item => {
        const textarea = document.getElementById(item.id);
        const editor = document.getElementById(item.id + 'Editor');
        if (textarea) textarea.value = item.content;
        if (editor) editor.innerHTML = item.content;
    });
    
    updatePreview();
    showToast(`Template ${t.mapel} berhasil dimuat!`);
}

// ==================== UPDATE PREVIEW ====================
function updatePreview() {
    const getHtml = (id) => {
        const editor = document.getElementById(id + 'Editor');
        if (editor && editor.innerHTML) return editor.innerHTML;
        const textarea = document.getElementById(id);
        if (textarea && textarea.value) return textarea.value.replace(/\n/g, '<br>');
        return '<p>-</p>';
    };
    
    const preview = `
        <h2>RENCANA PELAKSANAAN PEMBELAJARAN (RPP)</h2>
        <h4>KURIKULUM MERDEKA</h4>
        
        <table style="width:100%">
            <tr><td width="35%"><strong>Satuan Pendidikan</strong></td><td>${escapeHtml(document.getElementById('sekolah').value)}</td></tr>
            <tr><td><strong>Mata Pelajaran</strong></td><td>${escapeHtml(document.getElementById('mapel').value)}</td></tr>
            <tr><td><strong>Materi Pokok</strong></td><td>${escapeHtml(document.getElementById('materi').value)}</td></tr>
            <tr><td><strong>Kelas / Fase</strong></td><td>${escapeHtml(document.getElementById('kelas').value)}</td></tr>
            <tr><td><strong>Semester / Tahun</strong></td><td>${escapeHtml(document.getElementById('semester').value)} / ${escapeHtml(document.getElementById('tahun').value)}</td></tr>
            <tr><td><strong>Alokasi Waktu</strong></td><td>${escapeHtml(document.getElementById('alokasi').value)}</td></tr>
            <tr><td><strong>Nama Guru</strong></td><td>${escapeHtml(document.getElementById('guru').value)}</td></tr>
        </table>
        
        <h3>A. CAPAIAN PEMBELAJARAN (CP)</h3>
        <div>${getHtml('cp')}</div>
        
        <h3>B. TUJUAN PEMBELAJARAN</h3>
        <div>${getHtml('tujuan')}</div>
        
        <h3>C. PROFIL PELAJAR PANCASILA</h3>
        <div>${getHtml('profil')}</div>
        
        <h3>D. KOMPETENSI AWAL</h3>
        <div>${getHtml('kompetensiAwal')}</div>
        
        <h3>E. MODEL DAN METODE PEMBELAJARAN</h3>
        <p><strong>Model:</strong> ${escapeHtml(document.getElementById('model').value)}<br>
        <strong>Pendekatan:</strong> ${escapeHtml(document.getElementById('pendekatan').value)}<br>
        <strong>Metode & Sarana:</strong> ${getHtml('metode')}</p>
        
        <h3>F. MATERI PEMBELAJARAN</h3>
        <p><strong>Materi Konseptual:</strong></p>
        <div>${getHtml('materiKonsep')}</div>
        <p><strong>Materi Praktik & Contoh:</strong></p>
        <div>${getHtml('materiPraktek')}</div>
        
        <h3>G. PEMAHAMAN BERMAKNA</h3>
        <div>${getHtml('pemahaman')}</div>
        
        <h3>H. PERTANYAAN PEMANTIK</h3>
        <div>${getHtml('pemantik')}</div>
        
        <h3>I. KEGIATAN PEMBELAJARAN</h3>
        <p><strong>Pendahuluan:</strong> ${getHtml('pendahuluan')}<br>
        <strong>Kegiatan Inti:</strong> ${getHtml('inti')}<br>
        <strong>Penutup:</strong> ${getHtml('penutup')}</p>
        
        <h3>J. ASESMEN</h3>
        <p><strong>Asesmen Diagnostik:</strong> ${getHtml('diagnostik')}<br>
        <strong>Asesmen Formatif:</strong> ${getHtml('formatif')}<br>
        <strong>Asesmen Sumatif:</strong> ${getHtml('sumatif')}</p>
        
        <h3>K. INSTRUMEN PENILAIAN</h3>
        <div>${getHtml('soal')}</div>
        <p><strong>Kunci Jawaban & Rubrik:</strong> ${getHtml('kunci')}</p>
        
        <h3>L. TINDAK LANJUT</h3>
        <p><strong>Remedial:</strong> ${escapeHtml(document.getElementById('remedial').value)}<br>
        <strong>Pengayaan:</strong> ${escapeHtml(document.getElementById('pengayaan').value)}</p>
        
        <p style="margin-top:2rem; text-align:center">
            Mengetahui, Kepala Sekolah<br><br><br>
            ${escapeHtml(document.getElementById('guru').value)}<br>
            NIP. ....................
        </p>
        <p style="text-align:center">${new Date().toLocaleDateString('id-ID')}</p>
    `;
    
    const previewContainer = document.getElementById('rppPreview');
    if (previewContainer) {
        previewContainer.innerHTML = preview;
    }
}

// ==================== HELPER FUNCTIONS ====================
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function showToast(message) {
    let toast = document.querySelector('.toast');
    if (toast) toast.remove();
    
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==================== EXPORT FUNCTIONS ====================
function copyToClipboard() {
    const preview = document.getElementById('rppPreview');
    if (!preview) return;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = preview.innerHTML;
    const text = tempDiv.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        showToast('✅ RPP berhasil disalin! Silakan paste ke Word/Google Docs');
    }).catch(() => {
        showToast('Gagal menyalin, silakan copy manual');
    });
}

function exportToWord() {
    const preview = document.getElementById('rppPreview');
    if (!preview) return;
    
    const content = preview.innerHTML;
    const fullHtml = `<!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"><title>RPP</title>
    <style>
        body { font-family: 'Times New Roman', Arial, sans-serif; margin: 40px; }
        table { border-collapse: collapse; width: 100%; margin: 10px 0; }
        td, th { border: 1px solid #000; padding: 8px; vertical-align: top; }
        th { background: #f2f2f2; }
        h2 { color: #1e7b5c; text-align: center; }
        h3 { border-left: 4px solid #1e7b5c; padding-left: 10px; margin-top: 20px; }
        ul, ol { margin-left: 20px; }
    </style>
    </head>
    <body>${content}</body>
    </html>`;
    
    const blob = new Blob([fullHtml], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `RPP_${document.getElementById('mapel').value}.doc`;
    link.click();
    showToast('📄 RPP berhasil diunduh!');
}

function printRPP() {
    const preview = document.getElementById('rppPreview');
    if (!preview) return;
    
    const win = window.open();
    win.document.write(`
        <html><head><title>RPP</title>
        <style>
            body { font-family: 'Times New Roman', Arial, sans-serif; margin: 40px; }
            table { border-collapse: collapse; width: 100%; margin: 10px 0; }
            td, th { border: 1px solid #000; padding: 8px; }
            th { background: #f2f2f2; }
            h2 { color: #1e7b5c; text-align: center; }
            h3 { border-left: 4px solid #1e7b5c; padding-left: 10px; margin-top: 20px; }
        </style>
        </head><body>${preview.innerHTML}</body></html>
    `);
    win.print();
}

function clearAll() {
    if (confirm('Yakin ingin mengosongkan semua kolom?')) {
        document.querySelectorAll('input:not(.rich-editor input), select').forEach(el => {
            if (el.tagName === 'SELECT') el.selectedIndex = 0;
            else el.value = '';
        });
        document.querySelectorAll('.rich-editor').forEach(el => el.innerHTML = '<p></p>');
        document.querySelectorAll('textarea').forEach(el => el.value = '');
        updatePreview();
        showToast('Semua kolom telah dikosongkan');
    }
}

function applyTheme() {
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.removeAttribute('data-theme');
        document.getElementById('themeToggle').innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('rppGenius_dark', isDarkMode);
    applyTheme();
    showToast(isDarkMode ? 'Mode gelap aktif' : 'Mode terang aktif');
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    document.getElementById('templateSelect')?.addEventListener('change', (e) => loadTemplate(e.target.value));
    document.getElementById('exportWordBtn')?.addEventListener('click', exportToWord);
    document.getElementById('copyRPPBtn')?.addEventListener('click', copyToClipboard);
    document.getElementById('printBtn')?.addEventListener('click', printRPP);
    document.getElementById('clearAllBtn')?.addEventListener('click', clearAll);
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
    document.getElementById('refreshPreview')?.addEventListener('click', updatePreview);
    
    // Text inputs realtime
    document.querySelectorAll('input[type="text"], select').forEach(el => {
        el.addEventListener('input', updatePreview);
        el.addEventListener('change', updatePreview);
    });
}

// ==================== INIT ====================
function init() {
    applyTheme();
    setupEventListeners();
    initRichEditors();
    loadTemplate('matematika');
    showToast('✨ Selamat datang! Copy paste tabel dari Word/Excel langsung ke editor!');
}

// Expose global functions
window.formatEditor = formatEditor;
window.loadTemplate = loadTemplate;
window.updatePreview = updatePreview;

// Start
init();
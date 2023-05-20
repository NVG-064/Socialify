# Tentang
Socialify merupakan sebuah software yang dapat mempertemukan komunitas di seluruh dunia.

# Kolaborator
Semua orang dapat menjadi kolaborator, termasuk hipster, hustler, dan mentor. Hubungi project owner sesegera mungkin untuk mendapatkan akses.

# Saran Perihal Branch

> "Saya sebagai divisi web atau mobile, pilih yang mana?"

1. Kalo **divisi web**, sebaiknya di branch `dev_web` dan `stable_web` agar penyimpanan tidak termakan banyak dan mengurangi ambiguitas terhadap divisi web.
2. Kalo **divisi mobile**, sebaiknya di branch `dev_mobile` dan `stable_mobile` agar penyimpanan tidak termakan banyak dan mengurangi ambiguitas terhadap divisi mobile.

Tetapi, jika ingin menggunakan semua branch, diperbolehkan, selama tidak membingungkan kedua belah pihak.

# Tutorial Tentang Git (Termasuk Cara Clone Branch)
Untuk **divisi web**, [klik di sini]()<br>
Untuk **divisi mobile**, [klik di sini]()

# Informasi Branch
Terdapat 5 branch yang tersedia, yaitu:
1. Main

Sebuah branch untuk nampung hal hal umum dari project, seperti tentang Socialify atau hal-hal non teknis lainnya, dan berhubungan dengan Socialify itu sendiri

2. dev_mobile

Sebuah branch untuk nampung semua hal-hal yang berkaitan dengan mobile apps dari Socialify. Branch ini juga digunakan untuk membahas hal-hal teknis dari Socialify, misalnya dokumentasi dan cara compile nya. Branch ini sangat direkomendasikan untuk menyimpan semua progress dari mobile apps Socialify, misalnya karena takut progress ilang karena kejadian tidak disangka-sangka. Contoh lainnya adalah mau coba coba, tapi takut ada yang nggak bener ketika dipush ke repository.

3. stable_mobile

Nggak jauh beda sama nomor 2. Tapi branch ini sangat direkomendasikan untuk menyimpan semua project yang benar benar aman dan nggak ada error sama sekali ketika dicompile. Jadi kalo branch dev_mobile ada masalah, bisa balik ke tempat awal.

4. dev_web

Sebuah branch untuk nampung semua hal-hal yang berkaitan dengan web dari Socialify. Branch ini juga digunakan untuk membahas hal-hal teknis dari Socialify, misalnya dokumentasi dan cara compile nya. Branch ini sangat direkomendasikan untuk menyimpan semua progress dari web Socialify, misalnya karena takut progress ilang karena kejadian tidak disangka-sangka. Contoh lainnya adalah mau coba coba, tapi takut ada yang nggak bener ketika dipush ke repository.

5. stable_web

Nggak jauh beda sama nomor 4. Tapi branch ini sangat direkomendasikan untuk menyimpan semua project yang benar benar aman dan nggak ada error sama sekali ketika dicompile. Jadi kalo branch dev_web ada masalah, bisa balik ke tempat awal.

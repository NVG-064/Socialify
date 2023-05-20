# Tentang
Socialify merupakan sebuah software yang dapat mempertemukan komunitas di seluruh dunia.

# Kolaborator
Semua orang dapat menjadi kolaborator, termasuk hipster, hustler, dan mentor. Hubungi project owner sesegera mungkin untuk mendapatkan akses.

# Inisiasi Pertama Kali

Pra-syarat:
1. [git](https://git-scm.com/downloads) sudah terpasang*
2. Sudah mengatur `global config` untuk 'user name' dan 'user email'*

* Jika belum, caranya akan diberitahu nanti. Jadi, silahkan langsung tanyakan caranya. Akan dipandu secara langsung supaya mengerti secara detail perihal apa yang dilakukan.<br>

Cara:<br>
1. Buka git bash atau terminal kesukaan kalian. Lalu clone repository nya dengan menjalankan perintah ini:<br>
`https://github.com/NVG-064/Socialify.git`

Note, jika diminta untuk sign-in, silahkan sign-in dengan akun yang sudah ada

2. Lalu buat branch baru bernama `dev_web` dengan menjalankan perintah ini:<br>
`git checkout -b dev_mobile`

Perintah di atas sama seperti membuat brach baru, kemudian beralih ke branch baru bernama `dev_mobile`

3. Dapatkan semua perubahan dari repository terhadap branch `dev_mobile` dengan cara:<br>
`git pull origin dev_mobile`

4. Kita perlu membuat branch baru yaitu `stable_mobile` dengan menjalankan perintah ini:<br>
`git checkout -b stable_mobile`

Perintah di atas sama seperti membuat brach baru, kemudian beralih ke branch baru bernama `stable_mobile`

5. Dapatkan semua perubahan dari repository terhadap branch `stable_mobile` dengan cara:<br>
`git pull origin stable_mobile`

6. Selesai. Sekarang tinggal commit dan push sesuka hati. Happy coding.

# Informasi Branch

1. dev_mobile<br>

Sebuah branch untuk nampung semua hal-hal yang berkaitan dengan mobile apps dari Socialify. Branch ini juga digunakan untuk membahas hal-hal teknis dari Socialify, misalnya dokumentasi dan cara compile nya. Branch ini sangat direkomendasikan untuk menyimpan semua progress dari mobile apps Socialify, misalnya karena takut progress ilang karena kejadian tidak disangka-sangka. Contoh lainnya adalah mau coba coba, tapi takut ada yang nggak bener ketika dipush ke repository.

2. stable_mobile

Nggak jauh beda sama nomor 2. Tapi branch ini sangat direkomendasikan untuk menyimpan semua project yang benar benar aman dan nggak ada error sama sekali ketika dicompile. Jadi kalo branch `dev_mobile` ada masalah, bisa balik ke tempat awal.

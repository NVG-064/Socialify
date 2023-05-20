# Tentang

Socialify merupakan sebuah software yang dapat mempertemukan komunitas di seluruh dunia.

# Kolaborator

Semua orang dapat menjadi kolaborator, termasuk hipster, hustler, dan mentor. Hubungi project owner sesegera mungkin untuk mendapatkan akses.

# Inisiasi Pertama Kali

Pra-syarat:
1. [git](https://git-scm.com/downloads) sudah terpasang
2. Sudah mengatur [global config untuk 'user name' dan 'user email'](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)

Jika belum, caranya akan diberitahu nanti. Jadi, silahkan langsung tanyakan caranya. Akan dipandu secara langsung supaya mengerti secara detail perihal apa yang dilakukan.<br>

Cara:<br>
1. Buka git bash atau terminal kesukaan kalian. Lalu clone repository nya dengan menjalankan perintah ini:<br>
`https://github.com/NVG-064/Socialify.git`

Note, jika diminta untuk sign-in, silahkan sign-in dengan akun yang sudah ada

2. Lalu buat branch baru bernama `dev_web` dengan menjalankan perintah ini:<br>
`git checkout -b dev_web`

Perintah di atas sama seperti membuat branch baru, kemudian beralih ke branch baru bernama `dev_web`

3. Dapatkan semua perubahan dari repository terhadap branch `dev_web` dengan cara:<br>
`git pull origin dev_web`

4. Kita perlu membuat branch baru yaitu `stable_web` dengan menjalankan perintah ini:<br>
`git checkout -b stable_web`

Perintah di atas sama seperti membuat branch baru, kemudian beralih ke branch baru bernama `stable_web`

5. Dapatkan semua perubahan dari repository terhadap branch `stable_web` dengan cara:<br>
`git pull origin stable_web`

6. Selesai. Sekarang tinggal commit dan push sesuka hati. Happy coding.

# Pull Branch

Untuk mem-pull branch `dev_web`, pindah ke branch `dev_web` terlebih dahulu:<br>
`git checkout dev_web`

Kemudian gunakan perintah berikut:<br>
`git pull origin dev_web`

Jika ingin menggunakan `fetch` daripada `pull`, maka ganti perintah `pull` menjadi `fetch`

# Push ke Branch dev_web

1. Pindah ke branch `dev_web` terlebih dahulu:<br>
`git checkout dev_web`

2. Pindahkan file yang ingin di-commit ke staged area dengan perintah `git add`
3. Commit dan buat commit message dengan `git commit -m`
4. Push ke branch dev_web dengan perintah:<br>
`git push origin dev_web`

# Informasi Branch

1. dev_web

Sebuah branch untuk nampung semua hal-hal yang berkaitan dengan web apps dari Socialify. Branch ini juga digunakan untuk membahas hal-hal teknis dari Socialify, misalnya dokumentasi dan cara compile nya. Branch ini sangat direkomendasikan untuk menyimpan semua progress dari web apps Socialify, misalnya karena takut progress ilang karena kejadian tidak disangka-sangka. Contoh lainnya adalah mau coba coba, tapi takut ada yang nggak bener ketika dipush ke repository.

2. stable_web

Nggak jauh beda sama nomor 1. Tapi branch ini sangat direkomendasikan untuk menyimpan semua project yang benar benar aman dan nggak ada error sama sekali ketika dicompile. Jadi kalo branch `dev_web` ada masalah, bisa balik ke tempat awal.

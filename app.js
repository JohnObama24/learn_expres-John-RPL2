// ini mengimpor modul express yg sudah di instal
const express = require('express');
// membuat apk exspress dengan memanggil fungsi express
const app = express();
// nentuin port yg bakal dipakai buat dijalanakan
const PORT = 5511;

// pokoknya kode ini mengirim request permintaan masuk dan memberi respon Halaman 1 dan halaman 2 dalam bentuk console
app.get('/', (req, res) => {
    res.send(" HALAMAN 1");
    console.log("HALAMAN 2");
})
// kode ini memulai dengan menggnakan port yg udah ditentukan, disini fungsinya untuk memberi tau telah terkoneksi dengan port yg udah ditentuin diatas
app.listen(PORT, () => {
    console.log('konek keknya: ', PORT)
})
document.write('<h1>Javascript Dasar</h1>')
document.write('<h2>Variabel</h2>')

// Variabel Javascript
var nama = "Taufiqu Reza Yoga Pratama"
let kampus = "Universitas Trunojoyo Madura"
const prodi = "Teknik Informatika"

document.write(nama)
document.write('<br>')
document.write(kampus)
document.write('<br>')
document.write(prodi)

// Tipe Data Number
document.write('<h2>Tipe Data Number</h2>')
let angka = 10
let desimal = 2.5

document.write(angka)
document.write('<br>')
document.write('tipe data ',angka,' : ',typeof(angka))
document.write('<br>')
document.write(desimal)
document.write('<br>')
document.write('tipe data ',desimal,' : ',typeof(desimal))

// Tipe Data String
document.write('<h2>Tipe Data String</h2>')
let text = 'javascript dasar'

document.write(text)
document.write('<br>')
document.write('tipe data ',text,' : ',typeof(text))

// Tipe Data Boolean
document.write('<h2>Tipe Data Boolean</h2>')

let perbandingan1 = 10 > 2
let perbandingan2 = 10 < 2

document.write(perbandingan1)
document.write('<br>')
document.write(perbandingan2)

// Tipe Data Object
document.write('<h2>Tipe Data Object</h2>')

let mahasiswa = {
    nama: 'joko',
    nim : 210546980145,
    umur : 19,
    alamat : 'bojonegoro'
}

document.write(`nama saya ${mahasiswa.nama} nim saya ${mahasiswa.nim} umur saya ${mahasiswa.umur} dan alamat saya di ${mahasiswa.alamat}`)
document.write('<br>')
document.write(mahasiswa)

// Operator Aritmatika
document.write('<h2>Operator Aritmatika</h2>')

let a = 10
let b = 5

document.write('hasil penjumlahan dari ',a,'+',b,' = ',a+b)
document.write('<br>')
document.write('hasil pengurangan dari ',a,'-',b,' = ',a-b)
document.write('<br>')
document.write('hasil perkalian dari ',a,'x',b,' = ',a*b)
document.write('<br>')
document.write('hasil pembagian dari ',a,'/',b,' = ',a/b)
document.write('<br>')

// Operator Comparison
document.write('<h2>Operator Comparison</h2>')

document.write(a == b)
document.write('<br>')
document.write(a < b)
document.write('<br>')
document.write(a > b)
document.write('<br>')
document.write(a != b)

// Operator Logika
document.write('<h2>Operator Logika</h2>')

document.write(a && b)
document.write('<br>')
document.write(a || b)
document.write('<br>')
document.write(!b)

// Operator Ternary
document.write('<h2>Operator Ternary</h2>')

document.write(a == b ? 'sama' : 'berbeda')

// Percabangan If & Else
// document.write('<h2>Percabangan if & else</h2>')

let pesan = confirm('apakah kamu sudah pulang kerja?')
if (pesan) {
    alert('sudah')
}else{
    alert('belum')
}

// perulangan 
document.write('<h2>Perulangan</h2>')
for (let i = 1; i < 7; i++){
    document.write('halo')
    document.write('<br>')
}
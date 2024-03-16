document.write('<h1>Javascript Dasar</h1>')
document.write('<h2>Variabel</h2>')

// Variabel Javascript
var nama = "Hamam Mubarok Al Hadad"
let kampus = "Universitas Trunojoyo Madura"
const prodi = "Teknik Informatika"

document.write(nama)
document.write('<br>')
document.write(kampus)
document.write('<br>')
document.write(prodi)

// Tipe Data Number
document.write('<h2>Tipe Data Number</h2>')
let angka = 14
let desimal = 14.5

document.write(angka)
document.write('<br>')
document.write('tipe data ',angka,' : ',typeof(angka))
document.write('<br>')
document.write(desimal)
document.write('<br>')
document.write('tipe data ',desimal,' : ',typeof(desimal))

// Tipe Data String
document.write('<h2>Tipe Data String</h2>')
let text = 'belajar javascript'

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
    nama: 'warda',
    nim : 210411100005,
    umur : 20,
    alamat : 'gresik'
}

document.write(`nama saya ${mahasiswa.nama} nim saya ${mahasiswa.nim} umur saya ${mahasiswa.umur} dan saya berasal dari ${mahasiswa.alamat}`)
document.write('<br>')
document.write(mahasiswa)

// Operator Aritmatika
document.write('<h2>Operator Aritmatika</h2>')

let a = 100
let b = 25

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

let pesan = confirm('apakah kamu ingin membuka web ini?')
if (pesan) {
    alert('iya?')
}else{
    alert('tidak?')
}

// perulangan 
document.write('<h2>Perulangan</h2>')
for (let i = 1; i < 7; i++){
    document.write('hehe')
    document.write('<br>')
}
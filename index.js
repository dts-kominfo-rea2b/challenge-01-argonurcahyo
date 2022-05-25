// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

// let there be Monica
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
let favColor1 = new Set();
favColor1.add("Yellow");
favColor1.add("Pink");
favColor1.add("White");
favColor1.add("Purple");
firstUser.favoriteColor = [...favColor1];
firstUser.isHavePet = true;
let edu1 = [];
edu1[0] = {
  name: "SD 01",
  city: "Jakarta",
  graduate: 2016,
};
edu1[1] = {
  name: "SMP 02",
  city: "Jakarta",
  graduate: 2019,
};
edu1[2] = {
  name: "SMA 03",
  city: "Tangerang",
};
firstUser.education = edu1;
let favResto1 = new Set();
favResto1.add("Bento");
favResto1.add("Sushi");
favResto1.add("Pancake");
favResto1.add("Eggy");
favResto1.add("Tempura");
favResto1.add("Bento");
favResto1.add("Eggy");
favResto1.add("Padang");
favResto1.add("Tteok");
favResto1.add("Sushi");
favResto1.add("Sushi");
firstUser.favoriteRestaurant = [...favResto1];

// let there be Wendy
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
let favColor2 = new Set();
favColor2.add("Blue");
favColor2.add("Black");
favColor2.add("Grey");
secondUser.favoriteColor = [...favColor2];
secondUser.isHavePet = false;
let edu2 = [];
edu2[0] = {
  name: "SD 02",
  city: "Jakarta",
  graduate: 2010,
};
edu2[1] = {
  name: "SMP 03",
  city: "Bogor",
  graduate: 2013,
};
edu2[2] = {
  name: "SMA 01",
  city: "Surabaya",
  graduate: 2016,
};
edu2[3] = {
  name: "Universitas Maju",
  city: "Tangerang",
  graduate: 2010,
};
secondUser.education = edu2;
let favResto2 = new Set();
favResto2.add("Tempura");
favResto2.add("Bento");
favResto2.add("Sushi");
favResto2.add("Pancake");
favResto2.add("Padang");
favResto2.add("Katsu");
favResto2.add("Geprek");
favResto2.add("Pancake");
favResto2.add("Eggy");
secondUser.favoriteRestaurant = [...favResto2];

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
  console.log(users[0].favoriteColor.length);
}

main();

module.exports = {
  users,
};

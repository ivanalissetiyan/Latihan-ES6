// Membahas String Congcat

// Ambil element
const user_place = document.getElementById('user');

// ES5
// const user_logged = "Ivan";
// user_place.innerHTML = "Hy, " + user_logged + " Apa Kabar?";
// console.log(user_logged);

// ES6
const user_logged = "Ivan";
user_place.innerHTML = `Hy, ${user_logged}. Apa Kabar?`;

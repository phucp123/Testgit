import greet, { PI, add, multiply } from "./math.js";
import { getPost } from "./api.js";

// ========== 1️⃣ Biến, kiểu dữ liệu, toán tử ==========
let name = "Phú";
const age = 22;
let isStudent = true;
console.log(`Tên: ${name}, Tuổi: ${age}, Sinh viên: ${isStudent}`);

// ========== 2️⃣ Hàm, arrow function, scope, closure ==========
function sum(a, b) {
  return a + b;
}
const sumArrow = (a, b) => a + b;

function makeCounter() {
  let count = 0;
  return () => ++count; // closure
}
const counter = makeCounter();
console.log("Counter:", counter(), counter());

// ========== 3️⃣ Object, Array ==========
const user = { name: "Phú", age: 22 };
const fruits = ["apple", "banana", "mango"];

// ========== 4️⃣ Destructuring ==========
const { name: userName, age: userAge } = user;
const [firstFruit, , thirdFruit] = fruits;
console.log(userName, userAge, firstFruit, thirdFruit);

// ========== 5️⃣ Spread / Rest ==========
const newUser = { ...user, city: "Hà Nội" };
const moreFruits = [...fruits, "orange"];
console.log(newUser, moreFruits);

function showAll(...args) {
  console.log("Rest args:", args);
}
showAll(1, 2, 3, 4);

// ========== 6️⃣ Module import/export ==========
greet("Phú");
console.log("PI =", PI, "Add =", add(2, 3), "Mul =", multiply(3, 4));

// ========== 7️⃣ Promise + Async/Await ==========
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runAsyncDemo() {
  console.log("Bắt đầu...");
  await delay(1000);
  console.log("Kết thúc sau 1 giây.");
}
runAsyncDemo();

// ========== 8️⃣ Fetch API (dùng import từ api.js) ==========
const loadBtn = document.getElementById("loadBtn");
const output = document.getElementById("output");

loadBtn.addEventListener("click", async () => {
  output.textContent = "Đang tải dữ liệu...";
  try {
    const post = await getPost(1);
    output.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
  } catch (error) {
    output.textContent = "Lỗi tải dữ liệu!";
    console.error(error);
  }
});

// ========== 9️⃣ DOM Manipulation ==========
const title = document.getElementById("title");
title.style.color = "green";
title.textContent = "Học ES6 cực dễ!";

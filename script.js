const text = document.getElementById("text");

// Task 1: Add a class
document.getElementById("addBtn").addEventListener("click", function () {
  text.classList.add("highlight");
});

// Task 2: Remove a class
document.getElementById("removeBtn").addEventListener("click", function () {
  text.classList.remove("highlight");
});

// Task 3: Toggle a class
document.getElementById("toggleBtn").addEventListener("click", function () {
  text.classList.toggle("highlight");
});

// Task 4: Check if class exists
document.getElementById("checkBtn").addEventListener("click", function () {
  if (text.classList.contains("highlight")) {
    alert("Class exists");
  } else {
    alert("Class not exists");
  }
});

// Task 5: Button active state
const buyBtn = document.getElementById("buyBtn");
buyBtn.addEventListener("click", function () {
  buyBtn.classList.toggle("active-btn");
});

// Task 6: Dark mode
document.getElementById("darkBtn").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
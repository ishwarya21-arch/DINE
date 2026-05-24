function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function bookTable() {
  const inputs = document.querySelectorAll("#booking input");

  let name = inputs[0].value;
  let phone = inputs[1].value;
  let date = inputs[2].value;
  let time = inputs[3].value;

  if (!name || !phone || !date || !time) {
    alert("⚠️ Please fill all booking details");
    return;
  }

  alert("🎉 Table Booked Successfully!\n\nThank you " + name + " ❤️");

  inputs.forEach(input => input.value = "");
}

let cart = [];

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {

    const card = e.target.closest(".card");

    if (!card) return;

    const itemName = card.querySelector("h3").innerText;
    const itemPrice = card.querySelector(".price").innerText;

    cart.push({ name: itemName, price: itemPrice });

    alert(itemName + " added to cart 🛒");
    console.log("Cart:", cart);
  });
});

const contactBtn = document.querySelector("#contact .btn");

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll("#contact input, #contact textarea");

    let name = inputs[0].value;
    let email = inputs[1].value;
    let message = inputs[2].value;

    if (!name || !email || !message) {
      alert("⚠️ Please fill all contact fields");
      return;
    }

    alert("📩 Message Sent Successfully!\nWe will contact you soon ❤️");

    inputs.forEach(i => i.value = "");
  });
}

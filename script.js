const form = document.getElementById("subscribe-form");
const dismissBtn = document.querySelector(".dismiss-btn");

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// let params = new URL(document.location).searchParams;

function submit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  if (data.email.match(mailformat)) {
    localStorage.setItem("email", data.email);
    window.location.href = `thankU.html?email=${data.email}`;
  } else {
    alert("You have entered an invalid email address!");
  }
}

if (form) {
  form.addEventListener("submit", submit);
}

if (dismissBtn) {
  dismissBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  const emailPlaceholder = document.querySelector(".span-email");
  // const email = params.get("email");
  const email = localStorage.getItem("email");

  emailPlaceholder.innerHTML = email;
}

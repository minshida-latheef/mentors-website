const filterButtons = document.querySelectorAll(".filter-btn");
const mentorCards = document.querySelectorAll(".card");

// Filter mentors by category
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    mentorCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Booking Modal Logic
const modal = document.getElementById("bookingModal");
const modalTitle = document.getElementById("modalTitle");
const menteeInput = document.getElementById("menteeName");
const statusMsg = document.getElementById("statusMsg");
const confirmBtn = document.getElementById("confirmBtn");
const closeBtn = document.getElementById("closeBtn");

let selectedMentor = "";

document.querySelectorAll(".book-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedMentor = btn.dataset.mentor;
    modalTitle.textContent = `Book ${selectedMentor}`;
    menteeInput.value = "";
    statusMsg.textContent = "";
    modal.classList.remove("hidden");
  });
});

confirmBtn.addEventListener("click", () => {
  const name = menteeInput.value.trim();
  if (!name) {
    statusMsg.style.color = "#dc2626";
    statusMsg.textContent = "Please enter your name.";
    return;
  }
  statusMsg.style.color = "#16a34a";
  statusMsg.textContent = `Request sent to ${selectedMentor} for ${name}!`;
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

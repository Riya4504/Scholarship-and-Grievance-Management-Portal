function filterScholarships() {
  let search = document.getElementById("searchInput").value.toLowerCase();
  let category = document.getElementById("categoryFilter").value;
  let amount = document.getElementById("amountFilter").value;
  let deadline = document.getElementById("deadlineFilter").value;

  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let text = card.innerText.toLowerCase();
    let cardCategory = card.getAttribute("data-category");
    let cardAmount = card.getAttribute("data-amount");
    let cardDeadline = card.getAttribute("data-deadline");

    let match =
      text.includes(search) &&
      (category === "" || category === cardCategory) &&
      (amount === "" || amount === cardAmount) &&
      (deadline === "" || deadline === cardDeadline);

    card.style.display = match ? "block" : "none";
  });
}

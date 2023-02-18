const el = {
  cards: document.querySelectorAll(".card"),
  searchInput: document.querySelector("#search-input"),
};
el.searchInput.addEventListener("input", () => {
  const val = el.searchInput.value.toLocaleLowerCase();

  if (!val) {
    el.cards.forEach((card) => {
      card.classList.remove("is-hidden");
    });
  } else {
    el.cards.forEach((card) => {
      const tags = card.querySelectorAll(".tag");
      const tagsText = Array.from(tags).map((tag) =>
        tag.textContent.toLocaleLowerCase()
      );
      for (const text of tagsText) {
        if (text.includes(val)) {
          card.classList.remove("is-hidden");
          break;
        } else {
          card.classList.add("is-hidden");
        }
      }
    });
  }
});

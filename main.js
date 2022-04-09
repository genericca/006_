const entries = document.querySelectorAll(".entry");
const typeButtons = document.querySelectorAll(".entry-type-button");

typeButtons.forEach(button => button.addEventListener("click", () => {
    if (button.id == "all") {
        entries.forEach(entry => entry.style.display = "flex");
    }
    else {
        entries.forEach(entry => {
            if (entry.dataset.type == button.id)
                entry.style.display = "flex";
            else
                entry.style.display = "none";
        });
    }
}));
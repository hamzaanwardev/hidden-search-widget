const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
// on click toggle class active
search.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus()
});
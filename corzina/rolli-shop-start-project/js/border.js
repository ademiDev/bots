const modal = document.querySelector(".about-btn button")
modal.addEventListener("click", () => {
    document.querySelector(".about-modal").style.display = "block"
})

const modal1 = document.querySelector(".about-modal-block-square div")
modal1.addEventListener("click", () => {
    document.querySelector(".about-modal").style.display = "none"
})
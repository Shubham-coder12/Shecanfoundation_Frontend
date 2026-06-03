document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("joinModal");
    const openModalBtns = document.querySelectorAll(".open-modal");
    const closeModalBtn = document.querySelector(".close-btn");
    const joinForm = document.getElementById("joinForm");

    // Open Modal Functionality
    openModalBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });

    // Close Modal Functionality
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal if user clicks outside of it
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Form Interactive Response
    joinForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for applying! She Can Foundation will contact you soon.");
        modal.style.display = "none";
        joinForm.reset();
    });
});

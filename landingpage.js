const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

elements.forEach((element) => {
    observer.observe(element);
})


window.addEventListener("pagereveal", (event) => {
    if (event.viewTransition) {
        console.log("✅ Transição aconteceu");
    } else {
        console.log("❌ Sem transição dessa vez");
    }
});
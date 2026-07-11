window.addEventListener("pagereveal", (event) => {
    if (event.viewTransition) {
        console.log("✅ Transição aconteceu");
    } else {
        console.log("❌ Sem transição dessa vez");
    }
});
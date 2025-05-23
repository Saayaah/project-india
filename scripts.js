document.addEventListener("DOMContentLoaded", () => {
    
    const headerText = "Top 10 Places to Visit in India"; 
    const headerElement = document.getElementById("titlemain");
    let index = 0;

    function typeWriter() {
        if (index < headerText.length) {
            headerElement.innerHTML += headerText.charAt(index);
            index++;
            setTimeout(typeWriter, 100); 
        }
    }

    typeWriter(); 

    
    gsap.from(".place-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    });

    
    const placeCards = document.querySelectorAll(".place-card");
    placeCards.forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Hover effect
    placeCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power1.out" });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power1.out" });
        });
    });
});

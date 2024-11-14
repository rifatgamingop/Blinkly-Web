// Accordion FAQ
document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const arrow = button.querySelector('.accordion-arrow');
        
        if (content.style.display === "block") {
            content.style.display = "none";
            arrow.textContent = "▶";
        } else {
            content.style.display = "block";
            arrow.textContent = "▼";
        }
    });
});

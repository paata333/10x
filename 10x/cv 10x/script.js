// DARK & LIGHT MODE
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// SKILL CIRCLE ANIMATION
window.onload = () => {
    document.querySelectorAll(".circle").forEach(c=>{
        setTimeout(()=>{ c.classList.add("loaded") },400);
    });
};

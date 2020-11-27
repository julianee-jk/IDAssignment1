// Animated hamburger menu
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".nav_links");
const menuItem = document.querySelectorAll(".menu-item");

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
// Main toggle
menuBtn.addEventListener("click", () => {
    toggle();
});

// Toggle on item click if open
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (menuBtn.classList.contains("open")) {
        toggle();
        }
    });
});

function toggle() {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
  }

// Fade in and Slide Up
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};
const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})
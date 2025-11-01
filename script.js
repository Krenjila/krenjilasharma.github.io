// Simple scroll-reveal using IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { root: null, threshold: 0.12 }
);

// Register all elements that should reveal on scroll
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

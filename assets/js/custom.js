document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("main");
    const projects = document.querySelectorAll("#projects article");
    const articles = main.querySelectorAll("article");
    const closeButtons = document.querySelectorAll(".close");

    // Open article overlay
    projects.forEach((project) => {
        project.addEventListener("click", () => {
            const id = project.getAttribute("data-id");
            const article = document.getElementById(id);
            if (article) {
                main.style.display = "flex";
                article.classList.add("active");
                history.pushState(null, null, `#${id}`);
            }
        });
    });

    // Close article overlay
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            main.style.display = "none";
            articles.forEach((article) => article.classList.remove("active"));
            history.pushState(null, null, "#");
        });
    });

    // Handle browser back/forward navigation
    window.addEventListener("hashchange", () => {
        const hash = location.hash.replace("#", "");
        if (hash) {
            const article = document.getElementById(hash);
            if (article) {
                main.style.display = "flex";
                articles.forEach((a) => {
                    a.id === hash
                        ? a.classList.add("active")
                        : a.classList.remove("active");
                });
            }
        } else {
            main.style.display = "none";
            articles.forEach((article) => article.classList.remove("active"));
        }
    });

    // Initialize state on page load
    const hash = location.hash.replace("#", "");
    if (hash) {
        const article = document.getElementById(hash);
        if (article) {
            main.style.display = "flex";
            article.classList.add("active");
        }
    }
});

(function () {
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    if (!toggle || !icon) {
        return;
    }

    const savedTheme = localStorage.getItem("theme");

    const systemPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" ||
        (!savedTheme && systemPrefersDark)) {
        body.classList.add("dark-theme");
    }

    function updateButton() {
        const darkMode = body.classList.contains("dark-theme");

        icon.textContent = darkMode ? "☀" : "☾";

        toggle.setAttribute(
            "aria-label",
            darkMode
                ? "Switch to light theme"
                : "Switch to dark theme"
        );
    }

    updateButton();

    toggle.addEventListener("click", function () {
        body.classList.toggle("dark-theme");

        const darkMode =
            body.classList.contains("dark-theme");

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );

        updateButton();
    });
})();

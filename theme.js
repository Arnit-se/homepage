const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const themes = ["system", "light", "dark"];
const labels = {
    system: "System",
    light: "Ljust",
    dark: "Mörkt",
};

function applyTheme(theme) {
    root.dataset.theme = theme;
    const label = `Byt färgläge (nu: ${labels[theme]})`;
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
}

let savedTheme;
try {
    savedTheme = localStorage.getItem("theme");
} catch {
    // The switch also works when storage is unavailable.
}

applyTheme(themes.includes(savedTheme) ? savedTheme : "system");

toggle.addEventListener("click", () => {
    const index = themes.indexOf(root.dataset.theme);
    const theme = themes[(index + 1) % themes.length];
    applyTheme(theme);

    try {
        localStorage.setItem("theme", theme);
    } catch {
        // Keep the selected theme for the current page.
    }
});

toggle.hidden = false;

# JS-theme-toggler
A lightweight JavaScript project that toggles between dark and light themes, automatically detects system preferences, and remembers user settings using localStorage.

🌗 Theme Toggle with System Preference Detection

This project is a simple and elegant implementation of dark/light mode toggle using JavaScript, with support for system theme detection and user preference saving.

✨ Features

🌓 Dark & Light Mode Toggle — Switch between themes with a single button click.

💾 Persistent User Preference — Remembers your selected theme using localStorage.

🧠 Automatic System Detection — Automatically applies your device’s system theme (prefers-color-scheme).

🔄 Real-Time System Sync — If you haven’t manually chosen a theme, the site automatically updates when your system switches modes.

⚡ Lightweight & Framework-Free — Pure JavaScript, HTML, and CSS — no external libraries required.

🧩 How It Works

When the page loads, it first checks if a theme is saved in localStorage.

If not, it applies the current system theme (light or dark).

If your system theme changes (for example, at sunset), the site updates automatically — unless you’ve manually chosen a theme.

Clicking the toggle button switches between light and dark themes and saves your choice for future visits.

🚀 Usage

Clone or download this repository.

Open index.html in your browser.

Click the toggle button to switch themes.

Refresh — your chosen theme stays saved!

🛠️ Tech Stack

HTML

CSS

JavaScript (ES6)

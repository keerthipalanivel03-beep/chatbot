# Northstar — Offline Chatbot

Northstar is a standalone, browser-based chatbot for common questions, learning, and everyday help. Its interface and rule-based response engine run locally; there is no server to install and no account or API key to configure.

**This project does not use any external AI API.**

## Features

- Rule-based intent detection with normalized phrase and keyword matching.
- A local knowledge base with explanatory answers and selected examples.
- Safe basic arithmetic with operator precedence and parentheses; arbitrary JavaScript is never evaluated.
- Browser-local date and time.
- Short follow-up context held in JavaScript memory for the current page session only.
- Example prompts, keyboard-friendly message entry, a typing indicator, copy response, and New chat.
- Responsive layout, visible focus styles, semantic controls, and reduced-motion support.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

The application makes no network requests and loads no external libraries, fonts, services, or data.

## Folder structure

```text
chatbot/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to run

Open `chatbot/index.html` directly in a modern browser, or open the `chatbot` folder in VS Code and use **Open with Live Server** if that extension is already installed. No build, backend, package installation, or internet connection is needed.

## How the offline chatbot works

The JavaScript normalizes a message, scores matching phrases against intents and knowledge-base aliases, and chooses a matching local answer when one is available. A small arithmetic parser tokenizes numeric expressions and applies operators with precedence without calling `eval()`. Date and time answers use the browser's current local clock. The app retains only a brief topic reference in in-memory JavaScript while the page is open; it does not use `localStorage` or send messages anywhere.

## Supported topics

- **AI and technology:** artificial intelligence, machine learning, deep learning, generative AI, natural language processing, and computer vision.
- **History:** India's independence movement, Mahatma Gandhi, World War I, World War II, and ancient civilizations.
- **Geography:** India, Tamil Nadu, selected national capitals, and continents.
- **Science:** the solar system, photosynthesis, gravity, the human body, the water cycle, and electricity.
- **Programming:** programming basics, HTML, CSS, JavaScript, Python, Java, and C.
- **Education:** study techniques, exam preparation, time management, and learning tips.
- **Everyday questions:** greetings, thanks, farewells, jokes, help, local date and time, and basic arithmetic.

## Limitations

This is a rule-based chatbot, not a general-purpose language model. It can only answer from its built-in topics and matching rules, so unfamiliar, ambiguous, or very recent questions may receive an honest fallback rather than a researched answer. Arithmetic is intentionally limited to basic numeric expressions. Date and time depend on the device's clock and locale. Answers are informational and should be checked when accuracy is important.

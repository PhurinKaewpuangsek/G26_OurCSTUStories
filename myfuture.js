const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "The future belongs to those who believe in the power of their code. – Adapted",
    "Code your way to a better tomorrow. – Anonymous",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "The best way to predict the future is to invent it. – Alan Kay",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "If you can dream it, you can do it. – Walt Disney",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The harder you work for something, the greater you'll feel when you achieve it. – Anonymous",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Do not wait for leaders; do it alone, person to person. – Mother Teresa",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "If you're going through hell, keep going. – Winston Churchill",
    "Success is not in what you have, but who you are. – Bo Bennett"
];

const randomQuoteElement = document.getElementById("randomQuote");
const newQuoteButton = document.getElementById("newQuoteButton");

newQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    randomQuoteElement.textContent = quotes[randomIndex];
});

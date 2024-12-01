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

document.addEventListener('DOMContentLoaded', function () {
    const goals = [
        {
            title: "Software Engineer",
            summary: "A future where I develop cutting-edge software solutions.",
            details: "I aspire to become a software engineer who designs scalable, innovative systems that make an impact in people's lives. Whether it's solving complex problems or creating seamless user experiences, I want to lead with creativity and skill."
        },
        {
            title: "Cybersecurity Specialist",
            summary: "Securing the digital world one step at a time.",
            details: "In an increasingly connected world, cybersecurity is more important than ever. My goal is to ensure the safety of digital systems, protecting individuals and organizations from threats while fostering trust in technology."
        },
        {
            title: "AI Innovator",
            summary: "Exploring the frontier of artificial intelligence.",
            details: "Artificial intelligence has the power to change the world. I dream of working on AI systems that can solve real-world problems, enhance human capabilities, and create a smarter future for everyone."
        },
        {
            title: "Global Collaborator",
            summary: "Connecting with diverse teams across the globe.",
            details: "Collaboration is key to success in any field. I envision myself working with experts from around the world, sharing knowledge, and creating solutions that benefit communities globally."
        },
    ];

    const visionBoardContainer = document.getElementById('visionBoardContainer');

    function createVisionCard(goal) {
        const card = document.createElement('div');
        card.classList.add('visionCard');
        card.innerHTML = `
            <h3>${goal.title}</h3>
            <p>${goal.summary}</p>
            <div class="visionCardDetails">
                <h3>${goal.title}</h3>
                <p>${goal.details}</p>
            </div>
        `;

        card.addEventListener('click', () => {
            const details = card.querySelector('.visionCardDetails');
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        });

        return card;
    }

    // Populate the vision board with goals
    goals.forEach(goal => {
        const card = createVisionCard(goal);
        visionBoardContainer.appendChild(card);
    });
});

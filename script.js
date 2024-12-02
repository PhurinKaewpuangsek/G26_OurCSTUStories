document.getElementById("commentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const comment = document.getElementById("comment").value.trim();

    // Regex to check for non-English characters
    const nonEnglishRegex = /[^a-zA-Z0-9 ]/;

    if (!username || !comment) {
        alert("Please fill out both fields.");
    } else if (nonEnglishRegex.test(username)) {
        alert("Username should only contain English letters, numbers, and spaces.");
    } else {
        const newComment = {
            username: username,
            comment: comment,
        };
        let comments = JSON.parse(localStorage.getItem("comments")) || [];

        comments.push(newComment);

        localStorage.setItem("comments", JSON.stringify(comments));

        displayComments();

        // Clear the input fields after successful submission
        document.getElementById("username").value = "";
        document.getElementById("comment").value = "";
    }
});

function displayComments() {
    const output = document.getElementById("output");
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    output.innerHTML = "";

    comments.forEach((comment) => {
        const commentCard = document.createElement("div");
        commentCard.classList.add("commentCard");

        // Avatar
        const avatar = document.createElement("div");
        avatar.classList.add("commentAvatar");
        avatar.textContent = comment.username[0].toUpperCase(); // First letter as avatar
        commentCard.appendChild(avatar);

        // Comment Text
        const commentText = document.createElement("div");
        commentText.style.flex = "1"; // Take up remaining space
        commentText.style.wordWrap = "break-word"; // Prevent overflow
        commentText.innerHTML = `<strong>${comment.username}:</strong> ${comment.comment}`;
        commentCard.appendChild(commentText);

        // Timestamp
        const timestamp = document.createElement("span");
        timestamp.classList.add("commentTimestamp");
        const date = new Date();
        timestamp.textContent = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
        commentCard.appendChild(timestamp);

        output.appendChild(commentCard);
    });
}

document.getElementById("clearCommentsBtn").addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all comments?")) {
        localStorage.removeItem("comments"); // Remove from localStorage
        displayComments(); // Update the UI
    }
});

document.getElementById("themeSelector").addEventListener("change", (e) => {
    const theme = e.target.value;
    const guestbook = document.querySelector(".guestbook");
    guestbook.className = `guestbook ${theme}-theme`; // Add theme-specific classes
});

// Select all the cards
const cards = document.querySelectorAll('.team-card-inner');

// Select the flip button
const flipAllButton = document.getElementById('flipAllButton');

// Set cards to the back side by default on page load
window.addEventListener('DOMContentLoaded', () => {
    cards.forEach(card => {
        card.classList.add('flipped'); // Set to back side
    });
});

// Track the flip state
let allFlipped = true; // Start with all cards flipped (back side)

// Add event listener to the button
flipAllButton.addEventListener('click', () => {
    allFlipped = !allFlipped; // Toggle the flip state

    // Flip cards one by one with a delay
    cards.forEach((card, index) => {
        setTimeout(() => {
            if (allFlipped) {
                card.classList.add('flipped'); // Flip to back side
            } else {
                card.classList.remove('flipped'); // Flip to front side
            }
        }, index * 300); // 300ms delay between flips
    });
});

window.onload = displayComments;
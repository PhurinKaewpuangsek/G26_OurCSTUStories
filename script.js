
document.getElementById("commentForm").addEventListener("submit", function (event) {
    event.preventDefault();


    const username = document.getElementById("username").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (username && comment) {
        const newComment = {
            username: username,
            comment: comment
        };
        let comments = JSON.parse(localStorage.getItem("comments")) || [];

        comments.push(newComment);

        localStorage.setItem("comments", JSON.stringify(comments));

        displayComments();

        document.getElementById("username").value = "";
        document.getElementById("comment").value = "";
    } else {
        alert("Please fill out both fields.");
    }
});

function displayComments() {
    const output = document.getElementById("output");
    const comments = JSON.parse(localStorage.getItem("comments")) || [];

    output.innerHTML = "";

    comments.forEach(comment => {
        const commentDiv = document.createElement("p");
        commentDiv.innerHTML = `<strong>${comment.username}:</strong> ${comment.comment}`;
        output.appendChild(commentDiv);
    });
}

window.onload = displayComments;

// Array สำหรับเก็บข้อมูล comments
const comments = [];

document.getElementById("submitBtn").addEventListener("click", function () {
    
    const username = document.getElementById("username").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (username && comment) {
        const newComment = {
            username: username,
            comment: comment,
            timestamp: new Date().toLocaleString(), 
        };


        comments.push(newComment);

        // ล้างค่าช่องกรอก
        document.getElementById("username").value = "";
        document.getElementById("comment").value = "";

        alert("Comment saved successfully!");
        console.log("Saved Comments:", comments); 
    } else {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
    }
});

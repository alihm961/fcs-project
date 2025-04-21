const admin = getCurrentUser();
if (!admin || admin.email !== "admin@quiz.com") {
    alert("Access denied");
    window.location.href = "login.html";
}

const container = document.getElementById("user-scores");
const users = getUsers();

users.forEach(user => {
    const div = document.createElement("div");
    div.innerHTML =` <strong>${user.email}</strong>: ${JSON.stringify(user.scores)}`;
    container.appendChild(div);
});
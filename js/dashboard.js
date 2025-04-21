const admin = getCurrentUser();
if (!admin || admin.email !== "admin@quiz.com") {
    alert("Access denied");
    window.location.href = "index.html";
}

const container = document.getElementById("user-scores");
const users = getUsers();

users.forEach(user => {
    const div = document.createElement("div");
    div.innerHTML =` <strong>${user.email}</strong>: ${JSON.stringify(user.scores)}`;
    container.appendChild(div);
});

window.logout = function () {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
};

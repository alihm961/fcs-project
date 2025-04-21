if (!localStorage.getItem("quizzes")) {
    fetch("data/quizzes.json")
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("quizzes", JSON.stringify(data));
        location.reload(); 
    });
}

const currentUser = getCurrentUser();
if (!currentUser) {
    alert("Please login first.");
    window.location.href = "login.html";
}

document.getElementById("user-info").innerText = "Logged in as: " + currentUser.email;

const quizzes = getQuizzes();
const list = document.getElementById("quiz-list");

for (const quizId in quizzes) {
    const li = document.createElement("li");
    li.innerHTML = `<a href="quiz.html?quizId=${quizId}">${quizId}</a>`;
    list.appendChild(li);
}
const quizParams = new URLSearchParams(window.location.search);
const quizId = quizParams.get("quizId");
const user = getCurrentUser();
if (!user) {
    alert("Please login first.");
    window.location.href = "index.html";
}

const quiz = getQuizzes()[quizId];
const container = document.getElementById("quiz-container");

quiz.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <p>${q.question}</p>
    <div class="options">
        ${q.options.map((opt, j) => `
            <lable class="option">
                <input type="radio" name="q${i}" value="${j}">
                <span>${opt}</span>
            </lable>
            `).join('')}
            </div>
            `;
    container.appendChild(div);
});

function submitQuiz() {
    let score = 0;
    quiz.forEach((q, i) => {
        const ans = document.querySelector(`input[name="q${i}"]:checked`);
        if (ans && parseInt(ans.value) === q.answer) {
            score++;
        }
    });

    user.scores = user.scores || {};
    user.scores[quizId] = score;

    const users = getUsers().map(u => u.email === user.email ? user : u);
    saveUsers(users);
    setCurrentUser(user);

    document.getElementById("result").innerText = `Score: ${score} / ${quiz.length}`;
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}
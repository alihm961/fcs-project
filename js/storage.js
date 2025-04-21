function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function getQuizzes() {
    return JSON.parse(localStorage.getItem("quizzes")) || {};
}

function saveQuizzes(quizzes) {
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
}

function setCurrentUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}
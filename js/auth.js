function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedUsers = localStorage.getItem("users");
    if (!storedUsers) {
        alert("No users registered yet. Please register first.");
        return;
    }

    const users = JSON.parse(storedUsers);

    if (email === "admin@quiz.com" && password === "admin123") {
        const adminUser = { email };
        localStorage.setItem("currentUser", JSON.stringify(adminUser));
        window.location.href = "dashboard.html";
        return;
    }

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        window.location.href = "home.html";
    } else {
        alert("Wrong email or password.");
    }
}
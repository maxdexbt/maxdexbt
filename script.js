// Simple user database (for testing only - not secure for production)
const users = {
    "joe123": { password: "JoeKash2025", dashboard: "dashboard-joe.html" },
    "RBest": { password: "ThinkBest2025", dashboard: "dashboard-rhonda.html" }, 
    "Drew": { password: "99Thunder99", dashboard: "dashboard-andrew.html" },
    "Lanny": { password: "Kash55555", dashboard: "dashboard-lanny.html" },
    "Lawton": { password: "Tinman2025", dashboard: "dashboard-lawton.html" },
    "RichChad": { password: "Blake2025", dashboard: "dashboard-austin.html" },
    "ZMan": { password: "Kash2025", dashboard: "dashboard-zach.html" },
    "CPack": { password: "Pacman16", dashboard: "dashboard-christen.html" },
    "D2025": { password: "Pizza96", dashboard: "dashboard-dustin.html" },
    "DL2025": { password: "Skipper375", dashboard: "dashboard-dean.html" },
    "Deaner": { password: "Hockey16", dashboard: "dashboard-deano.html" } 
};

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Check if the user exists and the password matches
    if (users[username] && users[username].password === password) {
        // Store the user's dashboard URL and username in localStorage
        localStorage.setItem("userDashboard", users[username].dashboard);
        localStorage.setItem("currentUser", username);
        // Redirect to the user's dashboard
        window.location.href = users[username].dashboard;
    } else {
        // Show error message
        error.style.display = "block";
    }
}

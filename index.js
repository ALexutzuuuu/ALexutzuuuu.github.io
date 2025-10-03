function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (!username || !password) {
        alert('Please fill in all fields.');
        return;
    }


    let users =JSON.parse(localStorage.getItem('users')) || [];
    if(users.find(user => user.username === username)){
        alert('Username already exists!');
        return;
    }

    // Save user data to localStorage
    users.push({username, password});
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created! You can now log in.');
    window.location.href = 'index.html'; // Redirect to login page
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid username or password!');
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}
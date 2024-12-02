document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push({ email, password, username: email.split('@')[0], profilePicture: 'images/user-icon.png' });

    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Registrazione avvenuta con successo!');
    window.location.href = 'login.html';
});

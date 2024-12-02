function updateUserStatus() {
    const userStatus = document.getElementById('userStatus');
    const profileImage = document.getElementById('profileImage');
    const loggedOutOptions = document.getElementById('loggedOutOptions');
    const loggedInOptions = document.getElementById('loggedInOptions');

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        userStatus.textContent = `Ciao, ${currentUser.username}`;
        profileImage.src = currentUser.profilePicture || 'image/ok.png';
        loggedOutOptions.style.display = 'none';
        loggedInOptions.style.display = 'block';
    } else {
        userStatus.textContent = "Non sei connesso";
        profileImage.src = 'image/profilo.jpg';
        loggedOutOptions.style.display = 'block';
        loggedInOptions.style.display = 'none';
    }
}

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    updateUserStatus();
    alert("Sei stato disconnesso!");
    window.location.href = 'index.html'; 
}

document.addEventListener('DOMContentLoaded', updateUserStatus);

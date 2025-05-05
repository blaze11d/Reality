// ===== BANKING APP FUNCTIONALITY ===== //

// 1. Login System
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Hardcoded credentials (replace with real auth in production)
    if (username === 'Jamcassar1' && password === 'Password11') {
        closeModal('loginModal');
        document.getElementById('bankingInterface').style.display = 'block';
        showTab('dashboard');
    } else {
        alert('Invalid credentials. Try:\nUsername: Jamcassar1\nPassword: Password11');
    }
});

// 2. Tab Navigation
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabId).classList.add('active');
}

// 3. Modal Control
const modals = {
    loginModal: document.getElementById('loginModal'),
    forgotPasswordModal: document.getElementById('forgotPasswordModal'),
    changePasswordModal: document.getElementById('changePasswordModal')
};

function showModal(modalId) {
    closeAllModals();
    modals[modalId].style.display = 'flex';
}

function closeModal(modalId) {
    modals[modalId].style.display = 'none';
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Banking app initialized');
});

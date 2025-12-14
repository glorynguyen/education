// ===========================
// AUTHENTICATION FUNCTIONS
// ===========================

/**
 * Update UI based on authentication state
 * @param {Object} user - Firebase user object
 */
function updateAuthUI(user) {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userInfo = document.getElementById('userInfo');
    const userEmail = document.getElementById('userEmail');
    const loginPrompt = document.getElementById('loginPrompt');

    if (user) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        userInfo.style.display = 'inline-block';
        loginPrompt.style.display = 'none';
        userEmail.textContent = user.email;
    } else {
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        userInfo.style.display = 'none';
        loginPrompt.style.display = 'inline-block';
    }
}

/**
 * Sign in with Google popup
 */
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            alert('✅ Đăng nhập thành công!');
            console.log('User signed in:', result.user.email);
        })
        .catch((error) => {
            alert('❌ Lỗi đăng nhập: ' + error.message);
            console.error('Sign in error:', error);
        });
}

/**
 * Sign out current user
 */
function signOut() {
    auth.signOut()
        .then(() => {
            alert('✅ Đã đăng xuất');
            console.log('User signed out');
        })
        .catch((error) => {
            alert('❌ Lỗi đăng xuất: ' + error.message);
            console.error('Sign out error:', error);
        });
}

// ===========================
// AUTH STATE OBSERVER
// ===========================

/**
 * Listen for authentication state changes
 */
auth.onAuthStateChanged((user) => {
    currentUser = user;
    updateAuthUI(user);
    
    if (user) {
        console.log('👤 User logged in:', user.email);
        loadAllProgress();
    } else {
        console.log('👤 No user logged in');
    }
});
// Authentication state listener
auth.onAuthStateChanged((user) => {
  const loginBtn = document.getElementById('loginButtonContainer');
  const profileBtn = document.getElementById('userProfile');
  
  if (user) {
    // User is signed in
    console.log("User is signed in:", user);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify({
      username: user.displayName || user.email.split('@')[0],
      email: user.email
    }));
    
    // Update UI
    if (loginBtn) loginBtn.style.display = 'none';
    if (profileBtn) profileBtn.style.display = 'block';
  } else {
    // User is signed out
    console.log("User is signed out");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    
    // Update UI
    if (loginBtn) loginBtn.style.display = 'block';
    if (profileBtn) profileBtn.style.display = 'none';
  }
});

// Logout function
function logout() {
  auth.signOut().then(() => {
    console.log("User signed out successfully");
    window.location.href = "html/login.html";
  }).catch((error) => {
    console.error("Sign out error:", error);
  });
}

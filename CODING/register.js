

function onSignIn(googleUser) {
   
    var profile = googleUser.getBasicProfile();
    var email = profile.getEmail(); 
    var id = profile.getId(); 
    var name = profile.getName(); 
    var imageUrl = profile.getImageUrl(); 

    console.log('Google User Signed in: ', email);
    
    alert("Signed in with Google. Email: " + email);

}


document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if (email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }
 console.log("Registering user:", email);

     alert("Registration successful with email: " + email);

});


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        alert('You have successfully signed out.');
    });
}

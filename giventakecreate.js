// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAhYZiCRIfH7_HpFSqxuehm2DqByXYLtlg",
    authDomain: "give-n-take-35cd8.firebaseapp.com",
    databaseURL: "https://give-n-take-35cd8.firebaseio.com",
    projectId: "give-n-take-35cd8",
    storageBucket: "give-n-take-35cd8.appspot.com",
    messagingSenderId: "992232521063"
  };
  firebase.initializeApp(config);
  // Using a popup.
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');

$("#submit").on("click", function (event){
	event.preventDefault();
	firebase.auth().signInWithPopup(provider).then(function(result) {
 // This gives you a Google Access Token.
 var token = result.credential.accessToken;
 // The signed-in user info.
 var user = result.user;
 console.log(user)
});


var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var password = document.getElementById("password");
console.log("button clicked")

// firebase.auth().createUserWithEmailAndPassword(fname.value, lname.value, email.value, password.value).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;

//   // ...
// });

});
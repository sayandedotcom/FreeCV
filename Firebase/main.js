// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6Hx_PkN9x9GRvU3bVTwijyQcghgXKfIk",
  authDomain: "freecv-8e1dc.firebaseapp.com",
  projectId: "freecv-8e1dc",
  storageBucket: "freecv-8e1dc.appspot.com",
  messagingSenderId: "712648625827",
  appId: "1:712648625827:web:599ec21c417a3ecd4e3916",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      // document.write("You are Signed Up");
      // fetch("hh.html");
      // window.open("hh.html");
      window.open("../resume_after_login.html", "_self");
      console.log(result);
      // ...
    })
    .catch((error) => {
      alert("You Have entered invalid Email or Password type");
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};

// login function
const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Login
      // document.write("You are LogIn");
      window.open("../resume_after_login.html", "_self");
      console.log(result);
    })
    .catch((error) => {
      alert("You Have entered either wrong Email or Password");
      console.log(error.code);
      console.log(error.message);
    });
};

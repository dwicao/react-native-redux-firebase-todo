import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCyYpGvgMBGi64BTJ8VBzwzciEhBzYQToE",
  authDomain: "fir-rn-e2a49.firebaseapp.com",
  databaseURL: "https://fir-rn-e2a49.firebaseio.com",
  storageBucket: "fir-rn-e2a49.appspot.com",
  messagingSenderId: "78475304945"
});

async function signup(email, pass) {
  try {
      await firebase.auth()
          .createUserWithEmailAndPassword(email, pass);
      console.log("Account created");
      // Navigate to the Home page, the user is auto logged in
  } catch (error) {
      console.log(error.toString())
  }
};

async function login(email, pass) {
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);
        console.log("Logged In!");
        // Navigate to the Home page
    } catch (error) {
        console.log(error.toString())
    }
}

async function logout() {
    try {
        await firebase.auth().signOut();
        // Navigate to login view
    } catch (error) {
        console.log(error);
    }
}

export const firebaseRef = firebase.database().ref();
export default firebase;

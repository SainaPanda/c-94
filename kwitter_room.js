
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAQuq-9DGJb41mns0WvX6Urfcpr7de0R4I",
  authDomain: "c-94-8dfd8.firebaseapp.com",
  projectId: "c-94-8dfd8",
  storageBucket: "c-94-8dfd8.appspot.com",
  messagingSenderId: "176201997852",
  appId: "1:176201997852:web:80623f0c05648ce3b1c9d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      })

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
}
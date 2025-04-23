import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgi7FR3ZkmjWKvf1RS0tIxQ0dC47l9jDY",
  authDomain: "profile-591d8.firebaseapp.com",
  projectId: "profile-591d8",
  storageBucket: "profile-591d8.firebasestorage.app",
  messagingSenderId: "731323476769",
  appId: "1:731323476769:web:f4b50f571a282d8895ec60",
  measurementId: "G-9Y79HCT9YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appoinmentForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        // Get form values
const name = document.getElementById("Profile_name").value;
const email = document.getElementById("Profile_email").value;
const date = document.getElementById("Profile_date").value;
const description = document.getElementById("Profile_descrption").value;


// Validate required fields
if (!name || !email || !date || !time || !service || !phone) {
alert("Please fill all required fields!");
return;
}

// Create an object to store the appointment data
const appointmentData = {
    name,
    email,
    date,
    description,
    };
    console.log("Profile Data:", appointmentData);

// Send data to Firebase
const db = window.firebaseDB;
const appointmentsRef = ref(db, "appointments"); // Create a reference to 'appointments'
node

push(appointmentsRef, appointmentData)
.then(() => {
alert("Appointment booked successfully!");
form.reset(); // Clear form after submission
})
.catch((error) => {
console.error("Error saving data:", error);
alert("Failed to book appointment. Please try again.");

});
});
});
console.log("Script connected successfully!");

console.log("Script loaded!");
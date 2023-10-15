// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js"
import { createToast } from "../toast/script.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: "https://gcp23-a6432-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const certificatelist = ref(database, "Certificates")

const flag = document.getElementById("flag");
const submit = document.getElementById("submit");


submit.addEventListener("click", function(e) {
    e.preventDefault();
    onValue(certificatelist, function(snapshot) {
        if(snapshot.exists()) {
            let items = Object.keys(snapshot.val())
            if(items.includes(flag.value)) {
                createToast("success", "Chalo ye bhi thik hai")
                localStorage.setItem("id", flag.value)
                clear();
                setTimeout(() => {
                    window.location.replace('./certificate.html');
                }, 1500);
            } else createToast("error", "Zindagi me bahuat kuch sikhna hai")
        }
    })  
})

const clear = () => {
    flag.value=""
}

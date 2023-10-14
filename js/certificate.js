// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js"
import { createToast } from "../toast/script.js"
const firebaseConfig = {
  databaseURL: "https://gcp23-a6432-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const certificatelist = ref(database, "Certificates")

const img = document.getElementById("certi");
const download = document.getElementById("download")


onValue(certificatelist, function(snapshot) {
    if(snapshot.exists()) {
        let id = localStorage.getItem("id");
        if(snapshot.child(id).val()) {
            img.setAttribute("src", snapshot.child(id).val())
            download.setAttribute("href", snapshot.child(id).val())
            createToast("success", "Congratulations!!! Flex karlo ab")
        }  
    }
})



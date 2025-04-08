import { auth, db } from "./firebase-config.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                const userData = userSnap.data();

                // ✅ Display latest username
                document.getElementById("username").textContent = userData.username || "Anonymous";

                // ✅ Display latest email
                document.getElementById("user-email").textContent = user.email + " (not visible)";

                // ✅ Display latest institute name
                document.getElementById("institute-name").textContent = userData.institute || "Unknown Institute";
            }
        }
    });
});

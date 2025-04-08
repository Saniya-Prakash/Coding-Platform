// // // $(document).ready(function () {
// // //     let activeEditTypes = new Set();

// // //     function expandForm() {
// // //         $("form").addClass("active").show();
// // //         $("#update-btn").show(); 
// // //     }

// // //     function createUsernameFields() {
// // //         return `
// // //             <div class="form-group username-edit" data-edit-type="username">
// // //                 <label for="old-username">Current Username</label>
// // //                 <input type="text" id="old-username" name="old-username" placeholder="Enter current username" required>
                
// // //                 <label for="new-username">New Username</label>
// // //                 <input type="text" id="new-username" name="new-username" placeholder="Enter new username" required>
// // //             </div>
// // //         `;
// // //     }

// // //     function createEmailFields() {
// // //         return `
// // //             <div class="form-group email-edit" data-edit-type="email">
// // //                 <label for="old-email">Current Email</label>
// // //                 <input type="email" id="old-email" name="old-email" placeholder="Enter current email" required>
                
// // //                 <label for="new-email">New Email</label>
// // //                 <input type="email" id="new-email" name="new-email" placeholder="Enter new email" required>
// // //             </div>
// // //         `;
// // //     }

// // //     function createPasswordFields() {
// // //         return `
// // //             <div class="form-group password-edit" data-edit-type="password">
// // //                 <label for="old-password">Current Password</label>
// // //                 <input type="password" id="old-password" name="old-password" placeholder="Enter current password" required>
                
// // //                 <label for="new-password">New Password</label>
// // //                 <input type="password" id="new-password" name="new-password" placeholder="Enter new password" required>
                
// // //                 <label for="confirm-password">Confirm New Password</label>
// // //                 <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm new password" required>
// // //             </div>
// // //         `;
// // //     }

// // //     $("#user_edit").on("click", function () {
// // //         if (!activeEditTypes.has('username')) {
// // //             expandForm();
// // //             $("#edit-section").append(createUsernameFields());
// // //             $(this).prop("disabled", true);
// // //             activeEditTypes.add('username');
// // //         }
// // //     });

// // //     $("#email_edit").on("click", function () {
// // //         if (!activeEditTypes.has('email')) {
// // //             expandForm();
// // //             $("#edit-section").append(createEmailFields());
// // //             $(this).prop("disabled", true);
// // //             activeEditTypes.add('email');
// // //         }
// // //     });

// // //     $("#pass_edit").on("click", function () {
// // //         if (!activeEditTypes.has('password')) {
// // //             expandForm();
// // //             $("#edit-section").append(createPasswordFields());
// // //             $(this).prop("disabled", true);
// // //             activeEditTypes.add('password');
// // //         }
// // //     });

// // //     $("#update-btn").on("click", function (event) {
// // //         if (activeEditTypes.size === 0) {
// // //             event.preventDefault();
// // //             $("#alert-msg").text("There is nothing to update.").show();
// // //             return;
// // //         }

// // //         // Validate each active edit type
// // //         let isValid = true;
// // //         activeEditTypes.forEach(function(editType) {
// // //             const selector = `.form-group[data-edit-type="${editType}"]`;
// // //             const inputs = $(selector + " input");
            
// // //             // Check if all inputs are filled
// // //             inputs.each(function() {
// // //                 if (!$(this).val().trim()) {
// // //                     isValid = false;
// // //                     return false;
// // //                 }
// // //             });

// // //             // Additional password validation
// // //             if (editType === 'password') {
// // //                 const newPassword = $("#new-password").val();
// // //                 const confirmPassword = $("#confirm-password").val();
                
// // //                 if (newPassword !== confirmPassword) {
// // //                     $("#alert-msg")
// // //                         .text("New passwords do not match")
// // //                         .show();
// // //                     isValid = false;
// // //                 }

// // //                 if (newPassword.length < 8) {
// // //                     $("#alert-msg")
// // //                         .text("Password must be at least 8 characters long")
// // //                         .show();
// // //                     isValid = false;
// // //                 }
// // //             }
// // //         });

// // //         if (!isValid) {
// // //             event.preventDefault();
// // //         }
// // //     });

// // //     $("#edit-section").on("input", "input[required]", function () {
// // //         $("#alert-msg").hide();
// // //     });
// // // });

// // import { auth, db } from "./firebase-config.js";
// // import { updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// // import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
// // console.log(auth.currentUser);

// // $(document).ready(function () {
// //     let activeEditTypes = new Set();

// //     function expandForm() {
// //         $("form").addClass("active").show();
// //         $("#update-btn").show(); 
// //     }

// //     function createUsernameFields() {
// //         return `
// //             <div class="form-group username-edit" data-edit-type="username">
// //                 <label for="old-username">Current Username</label>
// //                 <input type="text" id="old-username" name="old-username" placeholder="Enter current username" required>
                
// //                 <label for="new-username">New Username</label>
// //                 <input type="text" id="new-username" name="new-username" placeholder="Enter new username" required>
// //             </div>
// //         `;
// //     }

// //     function createEmailFields() {
// //         return `
// //             <div class="form-group email-edit" data-edit-type="email">
// //                 <label for="old-email">Current Email</label>
// //                 <input type="email" id="old-email" name="old-email" placeholder="Enter current email" required>
                
// //                 <label for="new-email">New Email</label>
// //                 <input type="email" id="new-email" name="new-email" placeholder="Enter new email" required>
// //             </div>
// //         `;
// //     }

// //     function createPasswordFields() {
// //         return `
// //             <div class="form-group password-edit" data-edit-type="password">
// //                 <label for="old-password">Current Password</label>
// //                 <input type="password" id="old-password" name="old-password" placeholder="Enter current password" required>
                
// //                 <label for="new-password">New Password</label>
// //                 <input type="password" id="new-password" name="new-password" placeholder="Enter new password" required>
                
// //                 <label for="confirm-password">Confirm New Password</label>
// //                 <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm new password" required>
// //             </div>
// //         `;
// //     }

// //     $("#user_edit").on("click", function () {
// //         if (!activeEditTypes.has('username')) {
// //             expandForm();
// //             $("#edit-section").append(createUsernameFields());
// //             activeEditTypes.add('username');
// //         }
// //     });

// //     $("#email_edit").on("click", function () {
// //         if (!activeEditTypes.has('email')) {
// //             expandForm();
// //             $("#edit-section").append(createEmailFields());
// //             activeEditTypes.add('email');
// //         }
// //     });

// //     $("#pass_edit").on("click", function () {
// //         if (!activeEditTypes.has('password')) {
// //             expandForm();
// //             $("#edit-section").append(createPasswordFields());
// //             activeEditTypes.add('password');
// //         }
// //     });

// //     // $("#update-btn").on("click", function (event) {
// //     //     event.preventDefault();
        
// //     //     if (activeEditTypes.size === 0) {
// //     //         $("#alert-msg").text("There is nothing to update.").show();
// //     //         return;
// //     //     }

// //     //     let updates = {};
// //     //     let user = auth.currentUser;

// //     //     if (!user) {
// //     //         alert("No user is logged in.");
// //     //         return;
// //     //     }

// //     //     let isValid = true;
// //     //     activeEditTypes.forEach((editType) => {
// //     //         const selector = `.form-group[data-edit-type="${editType}"]`;
// //     //         const inputs = $(selector + " input");
            
// //     //         inputs.each(function () {
// //     //             if (!$(this).val().trim()) {
// //     //                 isValid = false;
// //     //                 return false;
// //     //             }
// //     //         });

// //     //         if (editType === 'password') {
// //     //             const newPassword = $("#new-password").val();
// //     //             const confirmPassword = $("#confirm-password").val();
                
// //     //             if (newPassword !== confirmPassword) {
// //     //                 $("#alert-msg").text("New passwords do not match").show();
// //     //                 isValid = false;
// //     //             }

// //     //             if (newPassword.length < 8) {
// //     //                 $("#alert-msg").text("Password must be at least 8 characters long").show();
// //     //                 isValid = false;
// //     //             }
// //     //         }
// //     //     });

// //     //     if (!isValid) {
// //     //         return;
// //     //     }

// //     //     // ✅ Update Username in Firestore
// //     //     const newUsername = $("#new-username").val()?.trim();
// //     //     if (newUsername) {
// //     //         updates.username = newUsername;
// //     //     }

// //     //     // ✅ Update Email & Send Verification
// //     //     const newEmail = $("#new-email").val()?.trim();
// //     //     if (newEmail && newEmail !== user.email) {
// //     //         alert("A verification email has been sent to your old and new email.");
// //     //         updateEmail(user, newEmail).then(() => sendEmailVerification(user));
// //     //     }

// //     //     // ✅ Update Password (Requires Re-authentication)
// //     //     const oldPassword = $("#old-password").val()?.trim();
// //     //     const newPassword = $("#new-password").val()?.trim();
// //     //     if (newPassword) {
// //     //         const credential = EmailAuthProvider.credential(user.email, oldPassword);
// //     //         reauthenticateWithCredential(user, credential)
// //     //             .then(() => updatePassword(user, newPassword))
// //     //             .then(() => sendEmailVerification(user))
// //     //             .catch((error) => alert("Password update failed: " + error.message));
// //     //     }

// //     //     // ✅ Apply Updates to Firestore
// //     //     if (Object.keys(updates).length > 0) {
// //     //         updateDoc(doc(db, "users", user.uid), updates);
// //     //     }

// //     //     alert("Profile updated successfully!");

// //     //     // ✅ Redirect to Profile Page & Reload Data
// //     //     window.location.href = "Profile.html";
// //     // });
// //     $("#update-btn").on("click", function (event) {
// //         event.preventDefault(); // Prevent default form submission
    
// //         if (activeEditTypes.size === 0) {
// //             $("#alert-msg").text("There is nothing to update.").show();
// //             return;
// //         }
    
// //         let updates = {};
// //         let user = auth.currentUser;
    
// //         if (!user) {
// //             alert("No user is logged in.");
// //             return;
// //         }
    
// //         let isValid = true;
// //         activeEditTypes.forEach((editType) => {
// //             const selector = `.form-group[data-edit-type="${editType}"]`;
// //             const inputs = $(selector + " input");
    
// //             inputs.each(function () {
// //                 if (!$(this).val().trim()) {
// //                     isValid = false;
// //                     return false;
// //                 }
// //             });
    
// //             if (editType === 'password') {
// //                 const newPassword = $("#new-password").val();
// //                 const confirmPassword = $("#confirm-password").val();
    
// //                 if (newPassword !== confirmPassword) {
// //                     $("#alert-msg").text("New passwords do not match").show();
// //                     isValid = false;
// //                 }
    
// //                 if (newPassword.length < 8) {
// //                     $("#alert-msg").text("Password must be at least 8 characters long").show();
// //                     isValid = false;
// //                 }
// //             }
// //         });
    
// //         if (!isValid) {
// //             return;
// //         }
    
// //         // ✅ Apply updates to Firestore
// //         if (Object.keys(updates).length > 0) {
// //             updateDoc(doc(db, "users", user.uid), updates);
// //         }
    
// //         alert("Profile updated successfully!");
    
// //         // ✅ Redirect to Profile Page
// //         window.location.href = "Profile.html";
// //     });
    
// //     $("#edit-section").on("input", "input[required]", function () {
// //         $("#alert-msg").hide();
// //     });

// //     console.log("Edit Profile script loaded successfully.");
// // });
// import { auth, db } from "./firebase-config.js";
// import { updateEmail, updatePassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
// import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// document.addEventListener("DOMContentLoaded", async () => {
//     const user = auth.currentUser;
//     if (!user) {
//         alert("No user logged in.");
//         window.location.href = "index.html"; // Redirect to login if not authenticated
//         return;
//     }

//     const userRef = doc(db, "users", user.uid);

//     // Fetch user data
//     const userSnap = await getDoc(userRef);
//     if (userSnap.exists()) {
//         const userData = userSnap.data();
//         document.getElementById("edit-username").value = userData.username || "";
//         document.getElementById("edit-email").value = user.email;
//         document.getElementById("edit-institute").value = userData.institute || "";
//     }

//     // Enable editing when "Edit" button is clicked
//     window.enableEdit = (fieldId) => {
//         document.getElementById(fieldId).disabled = false;
//     };

//     // Handle form submission
//     document.getElementById("edit-profile-form").addEventListener("submit", async (event) => {
//         event.preventDefault();
        
//         const newUsername = document.getElementById("edit-username").value.trim();
//         const newEmail = document.getElementById("edit-email").value.trim();
//         const newInstitute = document.getElementById("edit-institute").value.trim();
//         const newPassword = document.getElementById("edit-password").value.trim();

//         try {
//             let updates = {};

//             if (newUsername) updates.username = newUsername;
//             if (newInstitute) updates.institute = newInstitute;

//             if (Object.keys(updates).length > 0) {
//                 await updateDoc(userRef, updates);
//             }

//             if (newEmail && newEmail !== user.email) {
//                 await updateEmail(user, newEmail);
//                 alert("Email updated! Please verify your new email.");
//             }

//             if (newPassword.length >= 6) {
//                 await updatePassword(user, newPassword);
//                 alert("Password updated successfully.");
//             }

//             alert("Profile updated successfully!");
//             window.location.href = "Profile.html"; // Redirect to profile page
//         } catch (error) {
//             alert("Error updating profile: " + error.message);
//         }
//     });
// });
import { auth, db } from "./firebase-config.js";
import { updateEmail, updatePassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";




document.addEventListener("DOMContentLoaded", () => {
    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            alert("No user logged in.");
            window.location.href = "index.html"; // Redirect to login page
            return;
        }

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            const userData = userSnap.data();
            document.getElementById("edit-username").value = userData.username || "";
            document.getElementById("edit-email").value = user.email;
            document.getElementById("edit-institute").value = userData.institute || "";
        }
    });
});

// Enable editing when "Edit" button is clicked
window.enableEdit = (fieldId) => {
    document.getElementById(fieldId).disabled = false;
};

// Handle form submission
document.getElementById("edit-profile-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const user = auth.currentUser;
    if (!user) {
        alert("No user logged in.");
        return;
    }

    const userRef = doc(db, "users", user.uid);
    const newUsername = document.getElementById("edit-username").value.trim();
    const newEmail = document.getElementById("edit-email").value.trim();
    const newInstitute = document.getElementById("edit-institute").value.trim();
    const newPassword = document.getElementById("edit-password").value.trim();

    try {
        let updates = {};

        if (newUsername) updates.username = newUsername;
        if (newInstitute) updates.institute = newInstitute;

        if (Object.keys(updates).length > 0) {
            await updateDoc(userRef, updates);
        }

        if (newEmail && newEmail !== user.email) {
            await updateEmail(user, newEmail);
            alert("Email updated! Please verify your new email.");
        }

        if (newPassword.length >= 6) {
            await updatePassword(user, newPassword);
            alert("Password updated successfully.");
        }

        alert("Profile updated successfully!");
        window.location.href = "Profile.html"; // Redirect to profile page
    } catch (error) {
        alert("Error updating profile: " + error.message);
    }
});

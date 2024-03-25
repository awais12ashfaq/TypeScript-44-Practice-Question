// Question 32 : Checking Usernames
var current_users = ["Owais", "MUBEEN", "saim"];
var new_users = ["Mubeen", "Abdullah", "SAIM"];
new_users.forEach(function (new_users) {
    var exists = current_users.some(function (current_users) { return current_users.toLowerCase() === new_users.toLowerCase(); });
    if (exists) {
        console.log("username ".concat(new_users, ", is already taken. Please choose different username"));
    }
    else {
        console.log("username ".concat(new_users, ", is available"));
    }
});

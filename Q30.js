// Question 30 : Hello Admin
var usernames = ["admin", "user1", "user2"];
usernames.forEach(function (usernames) {
    if (usernames === "admin") {
        console.log("Hello ".concat(usernames, " , would you like to see status report ?"));
    }
    else {
        console.log("Hello ".concat(usernames, " thank you for logging in again"));
    }
});

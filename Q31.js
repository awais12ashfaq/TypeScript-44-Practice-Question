// Question 31 : No Users
var usernames = ["admin", "user1", "user2"];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(function (usernames) {
        console.log("Hello ".concat(usernames, " thank you for loging in again"));
    });
}

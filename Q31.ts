// Question 31 : No Users

const usernames: string[] = ["admin", "user1", "user2"];

if (usernames.length === 0) {
    console.log("We need to find some users!");

} else {
    usernames.forEach(usernames => {
        console.log(`Hello ${usernames} thank you for loging in again`);
        
    });
}


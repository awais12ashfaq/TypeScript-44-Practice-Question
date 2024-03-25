// Question 30 : Hello Admin

const usernames: string[] = ["admin", "user1", "user2"];

usernames.forEach(usernames => {
    if ( usernames === `admin`) {
        console.log(`Hello ${usernames} , would you like to see status report ?`);
    } else {
        console.log(`Hello ${usernames} thank you for loging in again`);
        
    }
});
// Question 32 : Checking Usernames

const current_users: string[] = ["Owais" , "MUBEEN" , "saim"];
const new_users: string[] = ["Mubeen" , "Abdullah" , "SAIM"];

new_users.forEach(new_users => {
    const exists = current_users.some(current_users => current_users.toLowerCase() === new_users.toLowerCase());

    if (exists) {
        console.log(`username ${new_users}, is already taken. Please choose different username`);
    } else {
        console.log(`username ${new_users}, is available`);
    }
});

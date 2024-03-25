// Question 15 : Changing Guest List

const dinnnerGuests : string[] = ["Albert Einstein" , "Harry Potter" , "Hitler"];

for(const guest of dinnnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
    
}

let cancelGuest : string = dinnnerGuests.pop()!;
console.log(`Unfortunately, ${cancelGuest}, can not make it to dinner.`);

dinnnerGuests.push("Cristiano Ronaldo");

for(const guest of dinnnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
    
}

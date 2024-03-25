// Question 17 : Shrinking Guest List

// Inviting Guests

const dinnnerGuests : string[] = ["Albert Einstein" , "Harry Potter" , "Hitler"];

for(const guest of dinnnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
    
}

console.log("-------------------------------------------------------------------------");

// Changing Guest

let cancelGuest : string = dinnnerGuests.pop()!;
console.log(`Unfortunately, ${cancelGuest}, can not make it to dinner.`);

dinnnerGuests.push("Cristiano Ronaldo");

for(const guest of dinnnerGuests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
    
}

console.log("-------------------------------------------------------------------------");

// Adding More Guests

console.log("Good News! We found a bigger dinner table.");

dinnnerGuests.unshift("Abraham Lincoln");
dinnnerGuests.splice(Math.floor(dinnnerGuests.length / 2) , 0, "Sherlock Holmes");
dinnnerGuests.push("Charlie Chaplin");

for(const guest of dinnnerGuests) {
    console.log(`Dear ${guest}, you are invited to my dinner party.`);
    
}

console.log("-------------------------------------------------------------------------");

// Shrinking Guests

console.log("Unfortunately, the new dinner table won't arrive at time for the dinner. We can only invite two people now.");

while(dinnnerGuests.length > 2) {
    const removedGuests : string = dinnnerGuests.pop()!;
    console.log(`Sorry ${removedGuests} , we cannot invite you to the dinner.`);

}

for (const guest of dinnnerGuests) {
    console.log(`Dear ${guest} , you are still invited to dinner`);
    
}

dinnnerGuests.length = 0;
console.log("The guest list is now empty:" , dinnnerGuests);

console.log("-------------------------------------------------------------------------");

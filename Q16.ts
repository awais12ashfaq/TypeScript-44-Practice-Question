// Question 16 : More Guests

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

console.log("Good News! We found a bigger dinner table.");

dinnnerGuests.unshift("Abraham Lincoln");
dinnnerGuests.splice(Math.floor(dinnnerGuests.length / 2) , 0, "Sherlock Holmes");
dinnnerGuests.push("Charlie Chaplin");

for(const guest of dinnnerGuests) {
    console.log(`Dear ${guest}, you are invited to my dinner party.`);
    
}

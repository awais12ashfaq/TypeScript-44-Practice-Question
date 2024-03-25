// Question 16 : More Guests
var dinnnerGuests = ["Albert Einstein", "Harry Potter", "Hitler"];
for (var _i = 0, dinnnerGuests_1 = dinnnerGuests; _i < dinnnerGuests_1.length; _i++) {
    var guest = dinnnerGuests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
var cancelGuest = dinnnerGuests.pop();
console.log("Unfortunately, ".concat(cancelGuest, ", can not make it to dinner."));
dinnnerGuests.push("Cristiano Ronaldo");
for (var _a = 0, dinnnerGuests_2 = dinnnerGuests; _a < dinnnerGuests_2.length; _a++) {
    var guest = dinnnerGuests_2[_a];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
console.log("Good News! We found a bigger dinner table.");
dinnnerGuests.unshift("Abraham Lincoln");
dinnnerGuests.splice(Math.floor(dinnnerGuests.length / 2), 0, "Sherlock Holmes");
dinnnerGuests.push("Charlie Chaplin");
for (var _b = 0, dinnnerGuests_3 = dinnnerGuests; _b < dinnnerGuests_3.length; _b++) {
    var guest = dinnnerGuests_3[_b];
    console.log("Dear ".concat(guest, ", you are invited to my dinner party."));
}

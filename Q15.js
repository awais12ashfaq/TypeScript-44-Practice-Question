// Question 15 : Changing Guest List
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

// Question 18 : Seeing The World

const placesToVisit: string[] = ["Greenland" , "Scotland" , "Ireland"];

// Original Order
console.log("Original Order");
console.log(placesToVisit);

// Alphabetical Order
console.log("Alphabethical Order");
console.log([placesToVisit].sort());

// Original Order Still Intact
console.log("Original Order Still Intact");
console.log(placesToVisit);

// Reverse Alphabetical Order
console.log("Reverse Alphabetical Order");
console.log([placesToVisit].sort().reverse());

// Original Order Still Intact
console.log("Original Order Still Intact");
console.log(placesToVisit);

// Reversed Order
console.log("Reversed Order");
placesToVisit.reverse();
console.log(placesToVisit);

// Reversed again to return to Original Order
console.log("Original Order Restored");
placesToVisit.reverse();
console.log(placesToVisit);

// Sort Alphabetically
console.log("Sorted Alphabetically");
console.log([placesToVisit].sort());

// Sort in reverse Alphabetical order
console.log("Sorted in reverse Alphabetical order");
console.log([placesToVisit].sort().reverse());
















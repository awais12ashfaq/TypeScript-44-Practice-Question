// Question 36 : T-Shirt
function make_shirt(size, message) {
    console.log("Size: ".concat(size, " , Message: ").concat(message));
}
make_shirt("Large", "I Love Football");
function make_shirt_default(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Football"; }
    console.log("Size: ".concat(size, " , Message: ").concat(message));
}
make_shirt_default();
make_shirt_default("Medium");
make_shirt_default("Small", "Hello World!");

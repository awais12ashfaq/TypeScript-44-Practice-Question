// Question 44 : Sandwiches
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order:");
    items.forEach(function (item) {
        console.log(item);
    });
}
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss");

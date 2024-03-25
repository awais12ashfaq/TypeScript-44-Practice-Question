// Question 45 : Cars
function describe_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    console.log("Car : ".concat(manufacturer, " , ").concat(model));
    console.log("Options:");
    options.forEach(function (Option) {
        for (var key in Option) {
            if (Option.hasOwnProperty(key)) {
                console.log("-".concat(key, ": ").concat(Option[key]));
            }
        }
    });
}
describe_car("Toyota", "Corolla", { color: "Aqua Blue" }, { year: 2024 });

// Question 42 : Great Magicians
var magicians = ["David", "Harry", "Ben"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magicians) {
    return magicians.map(function (magicians) { return "".concat(magicians, " the Great"); });
}
var great_magicians = make_great(magicians);
show_magicians(great_magicians);

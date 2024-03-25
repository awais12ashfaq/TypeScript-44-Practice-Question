// Question 43 : Unchanged Magicians
var magicians = ["David", "Harry", "Ben"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magicians) { return "".concat(magicians, " the Great"); });
}
var great_magicians = make_great(magicians);
show_magicians(great_magicians);
var Unchanged_magicians = magicians.slice();
var new_great_magicians = make_great(Unchanged_magicians);
console.log("Original magicians");
show_magicians(magicians);
console.log("Modified Magicians");
show_magicians(new_great_magicians);

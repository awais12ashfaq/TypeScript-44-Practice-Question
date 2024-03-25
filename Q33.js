// Question 33 : Ordinal Numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (numbers) {
    var ordinal;
    switch (numbers) {
        case 1:
            ordinal = "1st";
            break;
        case 2:
            ordinal = "2nd";
            break;
        case 3:
            ordinal = "3rd";
            break;
        default:
            ordinal = "".concat(numbers, "th");
            break;
    }
    console.log(ordinal);
});

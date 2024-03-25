// Question 44 : Sandwiches

function make_sandwich (...items:string[]):
void {
    console.log("Sandwich order:");
    items.forEach(item => {
        console.log(item);
    });
}

make_sandwich("Ham" , "Cheese" , "Lettuce");
make_sandwich("Turkey" , "Swiss");
make_sandwich("Peanut");

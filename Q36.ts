// Question 36 & 37 : T-Shirt

function make_shirt(size:string, message:string): 
void {

    console.log(`Size: ${size} , Message: ${message}`);
    
}

make_shirt("Large", "I Love Football");

function make_shirt_default(size:string = "large" , message:string = "I love Football"):
void {

    console.log(`Size: ${size} , Message: ${message}`);
    
}

make_shirt_default();
make_shirt_default("Medium");

make_shirt_default("Small", "Hello World!");
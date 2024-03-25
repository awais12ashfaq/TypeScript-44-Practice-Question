// Question 43 : Unchanged Magicians

const magicians: string[] = ["David" , "Harry" , "Ben"];

function show_magicians(magicians:string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
        
    });
}

function make_great(magicians:string[]): string[] {
    return magicians.map(magicians => `${magicians} the Great`);
}

const great_magicians: string[] =
make_great(magicians);
show_magicians(great_magicians);

const Unchanged_magicians: string[] = 
magicians.slice();
const new_great_magicians: string[] = 
make_great(Unchanged_magicians);

console.log("Original magicians");
show_magicians(magicians);

console.log("Modified Magicians");
show_magicians(new_great_magicians);


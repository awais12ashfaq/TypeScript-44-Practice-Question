// Question 42 : Great Magicians

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


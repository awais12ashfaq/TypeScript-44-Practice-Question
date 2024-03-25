const magicians: string[] = ["David" , "Harry" , "Ben"];

function show_magicians(magicians:string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
        
    });
}

show_magicians(magicians);

// Question 45 : Cars

function describe_car(manufacturer:string , model:string, ...options: { [key : string]:
    string | number }[]): void {
        console.log(`Car : ${manufacturer} , ${model}`);
        console.log("Options:");
        options.forEach(Option => {
            for (const key in Option) {
                if (Option.hasOwnProperty(key)) {
                    console.log(`-${key}: ${Option[key]}`);
                    
                }
            }
        });
        
        
    }

    describe_car("Toyota" , "Corolla" , { color: "Aqua Blue"} , { year: 2024});
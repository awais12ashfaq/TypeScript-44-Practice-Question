// Question 33 : Ordinal Numbers

const numbers : number[] = [1,2,3,4,5,6,7,8,9];

numbers.forEach(numbers => {
    let ordinal: string;
    switch(numbers) {
        case 1:
            ordinal = `1st`;
            break;
        case 2:
            ordinal = `2nd`;
            break;
        case 3:
            ordinal = `3rd`;
            break;
        default:
            ordinal = `${numbers}th`
            break;
    }
    console.log(ordinal);
    
})
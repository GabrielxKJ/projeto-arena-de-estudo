// let arrayN = [1, 2, 3, 4, 5 , 6 , 7, 8, 9, 10];

export function multiplica() {
    let result;
    for(let i = 1; i <= 10; i++) {
        eachNum = i;
        for(ii = 1; ii <= 10; ii++){
            result = eachNum * ii;
            console.log(result)
        }
    };
    return result;
}

multiplica()
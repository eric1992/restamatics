exports.integersAsString = `
    if(params.min > params.max)
        throw new Error("min must be less than or equal to max");
    const values = [];
    for(let i = params.min; i <= params.max; i++){
        values.push(i.toString());
    }        
    return values;
`
exports.integers = (params) => {
    if(params.min > params.max)
        throw new Error("min must be less than or equal to max");
    const values = [];
    for(let i = params.min; i <= params.max; i++){
        values.push(i.toString());
    }        
    return values;
}

exports.evensAsString = ` 
    if(params.min > params.max)
        throw new Error("min must be less than or equal to max");
    const values = [];
    const two = BigInt(2);
    for(let i = params.min % two == 0 
        ? params.min 
        : params.min + BigInt(1); 
        i <= params.max;
        i += two){
        values.push(i.toString());
    }
    return values;
`

exports.evens = (params) => {
    if(params.min > params.max)
        throw new Error("min must be less than or equal to max");
    const values = [];
    const two = BigInt(2);
    for(let i = params.min % two == 0 
        ? params.min 
        : params.min + BigInt(1); 
        i <= params.max;
        i += two){
        values.push(i.toString());
    }
    return values;
}

exports.oddsAsString = `
    if(params.min > params.max)
        throw new Error("min must be less than or equal to max");
    const values = [];
    const two = BigInt(2);
    for(let i = params.min % two == 1 
        ? params.min 
        : params.min + BigInt(1); 
        i <= params.max; 
        i += two){
        values.push(i.toString());
    }
    return values;
`;

exports.odds = (params) => {
    if(params.min > params.max)
        throw new Error("min must be less than or equal to max");
    const values = [];
    const two = BigInt(2);
    for(let i = params.min % two == 1 
        ? params.min 
        : params.min + BigInt(1); 
        i <= params.max; 
        i += two){
        values.push(i.toString());
    }
    return values; 
}

exports.primesAsString = `
    const values = [];
    for(let valueToTest = 2; values.length !== params.count; valueToTest++){
        let foundDivisor = false;
        for(let i = 0; i < values.length && !foundDivisor && values[i] <= Math.sqrt(valueToTest); i++){
            if(valueToTest % values[i] === 0)
                foundDivisor = true;
        }
        if(!foundDivisor){
            values.push(valueToTest);
        }
    }
    return values;
`;

exports.primes = (params) => {
    const values = [];
    for(let valueToTest = 2; values.length !== params.count; valueToTest++){
        let foundDivisor = false;
        for(let i = 0; i < values.length && !foundDivisor && values[i] <= Math.sqrt(valueToTest); i++){
            if(valueToTest % values[i] === 0)
                foundDivisor = true;
        }
        if(!foundDivisor){
            values.push(valueToTest);
        }
    }
    return values;
};

exports.fibonacciAsString = `
    const values = [];
    values.push(params.seedOne);
    if(params.count == 1){
        return values.map(i => i.toString());
    }
    values.push(params.seedTwo);
    if(params.count == 2){
        return values.map(i => i.toString());
    }
    for(let i = 2; i < params.count; i++){
        values.push(values[i - 1] + values[i - 2])
    }
    return values.map(i => i.toString());
`

exports.fibonacci = (params) => {
    const values = [];
    values.push(params.seedOne);
    if(params.count == 1){
        return values.map(i => i.toString());
    }
    values.push(params.seedTwo);
    if(params.count == 2){
        return values.map(i => i.toString());
    }
    for(let i = 2; i < params.count; i++){
        values.push(values[i - 1] + values[i - 2])
    }
    return values.map(i => i.toString());
}

exports.factorialAsString = `
    const factorialBase = (i) => {
        let answer = BigInt(1);
        for(let index = 1; index <= i; index++){
            answer *= BigInt(index);
        }
        return answer;
    }
    const values = [factorialBase(params.startIndex)];
    const endIndex = params.startIndex + params.count - 1
    for(let index = params.startIndex + 1; index <= endIndex; index++){
        const nextValue = BigInt(values[index - 2]) * BigInt(index);
        values.push(nextValue);
    }
    return values.map(i => i.toString());
`

exports.factorial = (params) => {
    const factorialBase = (i) => {
        let answer = BigInt(1);
        for(let index = 1; index <= i; index++){
            answer *= BigInt(index);
        }
        return answer;
    }
    const values = [factorialBase(params.startIndex)];
    const endIndex = params.startIndex + params.count - 1
    for(let index = params.startIndex + 1; index <= endIndex; index++){
        const nextValue = BigInt(values[index - 2]) * BigInt(index);
        values.push(nextValue);
    }
    return values.map(i => i.toString());
}
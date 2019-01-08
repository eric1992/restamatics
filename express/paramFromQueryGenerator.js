exports.minMax = (query) => {
    let min;
    try{
        min = BigInt(query.min);
    } catch(e) {
        min = BigInt(1);
    }
    let max;
    try{
        max = BigInt(query.max)
    } catch(e) {
        max = BigInt(5);
    }
    return {
        min: min,
        max: max,
    };
}

exports.fibonacci = (query) => {
    let count;
    try{
        count = parseInt(query.count, 10);
    } catch {
        count = 10;
    }
    let seedOne;
    try{
        seedOne = BigInt(query.seedOne);
    } catch {
        seedOne = BigInt(1);
    }
    let seedTwo;
    try{
        seedTwo = BigInt(query.seedTwo);
    } catch {
        seedTwo = BigInt(1);
    }
    return {
        count: count,
        seedOne: seedOne,
        seedTwo: seedTwo,
    };
}

exports.factorial = (query) => {
    let count;
    try{
        count = parseInt(query.count, 10);
    } catch {
        count = 10;
    }
    let startIndex;
    try{
        startIndex = parseInt(query.startIndex, 10) 
    } catch {
        startIndex = 1;
    }
    return {
        count: count,
        startIndex: startIndex,
    };
}
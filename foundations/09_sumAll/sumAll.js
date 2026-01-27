const sumAll = function(min,max) {
    let sum = 0;
    let swap;


    if (min > max){
        swap = max;
        max = min;
        min = swap;
    }

    if (min < 0 || max < 0){
        return "ERROR";
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }

    for (let i = min; i <= max; i++ )
    {
        sum += i;

    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;

function simple(num) {
    var list = new Array;

    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) { 
            if ((i % j == 0) && (j != i)) {break;} else {list.push(i);;break;};
        };
    };

    var string = '';
    if(num > 0) {
    for (var i = 0; i < list.length; i++) {
        string = string + list[i] + ' ';
    };
    };

    return string;
}

console.log(simple(+process.argv[2]));
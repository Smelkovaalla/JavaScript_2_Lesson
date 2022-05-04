function simple(am) {
    const list = new Array;
    let num = 2;
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) { 
            if ((i % j == 0) && (j != i)) {
                num = num + 1;
                break;
            }else{
                list.push(i);
                if (list.length < am) {
                    num = num + 1;
                }
                break;};
        };
    };
    return list;
}

console.log(simple(+process.argv[2]));

// node 2.1_index 9

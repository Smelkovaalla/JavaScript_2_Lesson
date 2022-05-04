const goods = {
    1: {
        id: 1,
        name: 'Рубашка',
        description: 'Мужская, нарядная',
        sizes: 50,
        price: 1500,
        available: 5,
    },
    2: {
        id: 2,
        name: 'Рубашка',
        description: 'Мужская, нарядная',
        sizes: 52,
        price: 1500,
        available: 4,
    },
    3: {
        id:3,
        name: 'Рубашка',
        description: 'Мужская, нарядная',
        sizes: 54,
        price: 1500,
        available: 3,
    },
    4: {
        id: 4,
        name: 'Платье',
        description: 'Женское, нарядное',
        sizes: 46,
        price: 2000,
        available: 4,
    },
    5: {
        id: 5,
        name: 'Платье',
        description: 'Женское, нарядное',
        sizes: 48,
        price: 2000,
        available: 8,
    },  


}

const basket = [
    {
        goodId: 1,
        amount: 3,
    },
    {
        goodId: 2,
        amount: 1,
    },
    {
        goodId: 4,
        amount: 2,
    },

]

function basketAdd(g, a) {
    let num1 = basket.length;
    let cor = 0;
    for (let m = 0; m < num1; m++) {
        if (g === basket[m].goodId) {
            let am = a + basket[m].amount;
            basket[m] = {goodId: g, amount: am,}; 
            cor++;
        };
    };   
    if (cor === 0) {
        basket[num1] = {goodId: g, amount: a,};
    }
    return basket;
}
console.log(basketAdd(3, 6));


function basketDelete(g2, a2) {
    let num2 = basket.length;
    for (let m2 = 0; m2 < num2; m2++) {
        if (g2 === basket[m2].goodId) {
            let am2 = basket[m2].amount - a2;
            if (am2 <= 0) {
                basket.splice(m2, 1);
                return basket;
            }else{
                basket[m2] = {goodId: g2, amount: am2,}; 
            }
        }
    }  
    return basket         
}
console.log(basketDelete(2, 3));

function basketDeleteAll () {
    basket.splice(0);
    return basket;
}
// console.log(basketDeleteAll());


function totalAmountSum() {
    let tAm = 0;
    for (let i = 0; i < basket.length; i++) {
        tAm = tAm + basket[i].amount;
    }
    console.log('Общее кол-во товаров = ', tAm, 'шт.');
    let tSum = 0;
    for (let i = 0; i < basket.length; i++) {
        tSum = tSum + goods[basket[i].goodId].price * basket[i].amount;
    } 
    console.log('Сумма товаров = ', tSum, 'руб.');
}
totalAmountSum();

// node 2.2_index
